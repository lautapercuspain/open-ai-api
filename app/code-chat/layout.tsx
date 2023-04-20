import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css"
import SideBar from "app/components/shared/SideBar"

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div className="mx-auto w-full dark:bg-purple-900">
        <SideBar setOpenSecondayNavBar={undefined} />
        {children}
      </div>
    </>
  )
}
