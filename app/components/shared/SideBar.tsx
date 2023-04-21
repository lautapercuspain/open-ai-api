"use client"

import { MessageSquare, Code2, Home } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function SideBar({ setOpenSecondayNavBar }) {
  // const [searchTerm, setSearchTerm] = useState("")
  // const userIsSearching = searchTerm !== ""
  const path = usePathname()

  return (
    <div
      id="sidebar"
      className={`absolute top-0 left-0 z-20 hidden h-full w-16 -translate-x-full flex-col items-start border-r-[1px] border-purple-700
      bg-purple-900 px-5 pl-4 pt-3 transition-transform duration-700 sm:fixed sm:flex sm:translate-x-0`}
    >
      <Link href="/" className="mt-7 cursor-pointer ">
        <Home width={26} height={26} className="text-white hover:text-mint" />
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
        <Link href="/code-idea" className="mt-8 cursor-pointer">
          <Code2
            width={32}
            height={32}
            className={`text-white hover:text-mint ${
              path === "/code-idea" ? "text-mint" : ""
            }`}
          />
        </Link>
      </div>

      <Link href="/code-chat" className="mt-8 cursor-pointer">
        <MessageSquare
          width={26}
          height={26}
          className={`text-white hover:text-mint ${
            path === "/code-chat" ? "text-mint" : ""
          }`}
        />
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
