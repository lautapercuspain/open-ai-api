import PromptCard from "app/components/shared/PromptCard"
import SideBar from "app/components/shared/SideBar"
import Client from "./client"

export default async function Dashboard() {
  return (
    <>
      <SideBar setOpenSecondayNavBar={undefined} />
      <div className="mx-auto w-full  dark:bg-purple-900">
        <Client />
      </div>
    </>
  )
}
