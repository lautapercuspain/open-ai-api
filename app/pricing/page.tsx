import { harperClient } from "@/lib/harperdb"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import { authOptions } from "pages/api/auth/[...nextauth]"
import Client from "./client"
import Faqs from "./faqs"
export const revalidate = 0
export default async function Page() {
  const session = await getServerSession(authOptions)
  if (!session) {
    redirect("/?action=authenticate&referer=dashboard")
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

          <Client session={session} />

          <Faqs />
        </div>
      </main>
    </>
  )
}
