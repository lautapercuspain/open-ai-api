import { harperClient } from "@/lib/harperdb"
import PromptCard from "app/components/shared/PromptCard"
import SideBar from "app/components/shared/SideBar"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import { authOptions } from "pages/api/auth/[...nextauth]"
import Client from "./client"

export default async function Dashboard() {
  let harperUser
  const session = await getServerSession(authOptions)
  if (!session) {
    redirect("/?action=authenticate&referer=dashboard")
  }
  //@ts-ignore
  const userId = session && session.user?.id
  //@ts-ignore
  if (session && session.user?.id) {
    harperUser = await harperClient({
      operation: "sql",
      sql: `SELECT * FROM Auth.Users WHERE id = "${userId}"`,
    })
  }
  const existingCredits = harperUser[0]?.credits
  return (
    <>
      <SideBar setOpenSecondaryNavBar={undefined} />
      <div className="mx-auto w-full  dark:bg-purple-900">
        <Client credits={existingCredits} />
      </div>
    </>
  )
}
