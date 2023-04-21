"use client"

import { MessageSquare, Code2, Home, LayoutDashboard } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function SideBar({ setOpenSecondayNavBar }) {
  // const [searchTerm, setSearchTerm] = useState("")
  // const userIsSearching = searchTerm !== ""
  const path = usePathname()

  return (
    <div
      id="sidebar"
      className={`absolute top-0 left-0 z-20 hidden h-full w-16 translate-x-full flex-col items-start border-r-[1px] border-purple-700
      bg-purple-800 px-2 pt-3 transition-transform duration-700 sm:fixed sm:flex sm:translate-x-0`}
    >
      <Link href="/" className="mt-7 cursor-pointer">
        <div
          className="mx-auto flex h-[40px] w-[40px] items-center justify-center rounded-md pr-2 
 hover:bg-purple-500 "
        >
          <Home width={26} height={26} className="ml-1.5 text-white" />
        </div>
        {/* <p className="font-mono text-[11px] text-white">Home</p> */}
      </Link>
      <Link href="/dashboard" className="mt-7 cursor-pointer ">
        <div
          className="mx-auto flex h-[40px] w-[40px] items-center justify-center rounded-md pr-2
 hover:bg-purple-500"
        >
          <LayoutDashboard
            width={26}
            height={26}
            className={`ml-1.5 text-white ${
              path === "/dashboard" ? "text-mint" : ""
            }`}
          />
        </div>
        {/* <p className="font-mono text-[11px] text-white">Home</p> */}
      </Link>

      <div
        className="mt-8 cursor-pointer"
        onClick={() => {
          if (typeof setOpenSecondayNavBar !== "undefined") {
            setOpenSecondayNavBar((prevState) => !prevState)
          }
        }}
      >
        <Link href="/code-idea" className="mt-7 cursor-pointer">
          <div
            className="mx-auto flex h-[40px] w-[40px] items-center justify-center rounded-md pr-2
 hover:bg-purple-500 "
          >
            <Code2
              width={26}
              height={26}
              className={`ml-1.5 text-white ${
                path === "/code-idea" ? "text-mint" : ""
              }`}
            />
          </div>
        </Link>
      </div>

      <Link href="/code-chat" className="mt-8 cursor-pointer">
        <div
          className="mx-auto flex h-[40px] w-[40px] items-center justify-center rounded-md 
 pr-2 hover:bg-purple-500"
        >
          <MessageSquare
            width={26}
            height={26}
            className={`ml-1.5  text-white ${
              path === "/code-chat" ? "text-mint" : ""
            }`}
          />
        </div>
        {/* <p className="font-mono text-[11px] text-white">Chat</p> */}
      </Link>
      {/* <div className="mt-8 cursor-pointer">
        <SearchBar
          userIsSearching={userIsSearching}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
      </div> */}
    </div>
  )
}
