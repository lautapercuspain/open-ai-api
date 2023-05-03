import { harperClient } from "@/lib/harperdb"
import { getServerSession } from "next-auth"
import { authOptions } from "pages/api/auth/[...nextauth]"
import Client from "./client"
import Faqs from "./faqs"
export const revalidate = 0
export default async function Page() {
  let harperUser
  let opConfirmation = false
  let totalCredits: number = 0
  let purchasedCredits: number = 0
  const session = await getServerSession(authOptions)
  // console.log("session:", session)
  //@ts-ignore
  const userId = session && session.user?.id

  //@ts-ignore
  if (session && session.user?.id) {
    harperUser = await harperClient({
      operation: "sql",
      sql: `SELECT * FROM Auth.Users WHERE id = "${userId}"`,
    })
  }
  // console.log("user in the server:", user)

  const checkoutSession = await harperClient({
    operation: "sql",
    //@ts-ignore
    sql: `SELECT * FROM Auth.CheckoutSessions WHERE userId = "${userId}" AND credits > 0 ORDER BY __createdtime__ DESC LIMIT 1`,
  })
  // console.log("checkoutSession:", checkoutSession[0])
  if (userId && harperUser[0]) {
    //Get User from HarperDB

    const existingCredits = harperUser[0]?.credits
    console.log("existingCredits:", existingCredits)

    purchasedCredits =
      checkoutSession.length > 0 ? checkoutSession[0]?.credits : 0

    totalCredits =
      purchasedCredits > 0
        ? parseInt(purchasedCredits + existingCredits, 10)
        : 0

    // console.log("total de creditos ahora::", totalCredits)
    if (totalCredits > 0) {
      const updatedUser = {
        ...harperUser[0],
        credits: totalCredits,
      }
      //UPDATE USER WITH TOTAL CREDITS
      await harperClient({
        operation: "update",
        schema: "Auth",
        table: "Users",
        hash_values: [
          {
            id: userId,
          },
        ],
        records: [updatedUser],
      })
    }
    //UPDATE CHECKOUT SESSION TO CONFIRMED AND SET CREDITS TO 0
    const updatedCheckout = {
      ...checkoutSession[0],
      confirmed: true,
      credits: 0,
    }

    if (checkoutSession[0]) {
      const updatedOp = await harperClient({
        operation: "update",
        schema: "Auth",
        table: "CheckoutSessions",
        hash_values: [
          {
            id: checkoutSession[0]?.id,
          },
        ],
        records: [updatedCheckout],
      })
      if (updatedOp && updatedOp.update_hashes?.[0] !== "") {
        opConfirmation = true
      }
    }
  }

  return (
    <>
      <main className="flex w-full flex-col items-center justify-center px-4 text-center sm:mt-12">
        <div className="container mx-auto mb-20 px-4 pt-20 lg:px-0">
          <h1 className="mx-auto mb-3 w-[80%] font-inter text-4xl font-bold text-white dark:text-white sm:w-[100%] sm:text-6xl sm:leading-none sm:tracking-tight">
            Only pay what you use
          </h1>
          <p className="mx-auto mt-8 w-[80%] text-gray-200 sm:w-full">
            No hidden fees. No surprise bills. No subscription bills. Only pay
            what you use.
          </p>

          <Client
            session={session}
            purchasedCredits={purchasedCredits}
            opConfirmation={opConfirmation}
            totalCredits={totalCredits}
          />

          <Faqs />
        </div>
      </main>
    </>
  )
}
