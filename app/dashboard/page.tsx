import PromptCard from "app/components/shared/PromptCard"
import SideBar from "app/components/shared/SideBar"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import { authOptions } from "pages/api/auth/[...nextauth]"
import Client from "./client"

export default async function Dashboard() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect("/?action=authenticate&referer=dashboard")
  }
  return (
    <>
      <SideBar setOpenSecondaryNavBar={undefined} />
      <div className="mx-auto w-full  dark:bg-purple-900">
        <Client />
      </div>
    </>
  )
}
