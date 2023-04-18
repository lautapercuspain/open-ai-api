"use client"

import { MessageSquare, Code2, Home } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import tailwindConfig from "tailwind.config"

export default function SideBar({ setOpenSecondayNavBar }) {
  // const [searchTerm, setSearchTerm] = useState("")
  // const userIsSearching = searchTerm !== ""

  return (
    <div
      id="sidebar"
      className={`absolute top-0 left-0 z-20 hidden h-full w-16 -translate-x-full flex-col items-start border-r-[1px]
      border-purple-700 bg-purple-900 px-5 pt-3 transition-transform duration-700 sm:fixed sm:flex sm:translate-x-0`}
    >
      <Link href="/" className="mt-7 cursor-pointer ">
        <Home width={26} height={26} className="text-white hover:text-mint" />
      </Link>
      <div
        className="mt-8 cursor-pointer"
        onClick={() => setOpenSecondayNavBar((prevState) => !prevState)}
      >
        <Code2 width={26} height={26} className="text-white hover:text-mint" />
      </div>
      <Link href="/code-chat" className="mt-8 cursor-pointer">
        <MessageSquare
          width={26}
          height={26}
          className="text-white hover:text-mint"
        />
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
