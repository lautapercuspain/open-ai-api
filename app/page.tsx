import { getServerSession } from "next-auth"
import { authOptions } from "pages/api/auth/[...nextauth]"
import { cookies } from "next/headers"
import Client from "./client"
import Footer from "./components/Footer"

import { harperClient } from "@/lib/harperdb"

export const metadata = {
  title: "Create Genius Code",
  description:
    "A tool that will help you find quick and more innovative solutions using AI and specifically trained models to make the developer's life easier.",
}
export default async function Page() {
  const cookieStore = cookies()
  const session = await getServerSession(authOptions)
  const userIp = cookieStore.get("user-ip")?.value || ""

  const anonymousUserData = await harperClient({
    operation: "sql",
    sql: `SELECT * FROM Auth.Trials WHERE ip = "${userIp}"`,
  })
  // console.log("userUsage:", userUsage)
  const userUsage = (anonymousUserData && anonymousUserData[0]) || {}
  const csrfTokenValue = cookieStore.get("next-auth.csrf-token")?.value

  const userHasAccount = csrfTokenValue !== "" && csrfTokenValue !== undefined
  return (
    <>
      <main className={`mx-auto max-w-max pb-10`}>
        <Client
          session={session}
          userHasAccount={userHasAccount}
          ip={userIp}
          apiCalls={userUsage?.apiCalls}
        />
        <Footer session={session} />
      </main>
    </>
  )
}

{
  /* <Subscription /> */
}
