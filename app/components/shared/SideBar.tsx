"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import tailwindConfig from "tailwind.config"

const colors: any = tailwindConfig.theme?.extend?.colors

export default function SideBar({ setOpenSecondayNavBar }) {
  const [searchTerm, setSearchTerm] = useState("")
  const userIsSearching = searchTerm !== ""

  return (
    <div
      id="sidebar"
      className={`absolute top-0 left-0 z-20 hidden h-full w-16 -translate-x-full flex-col items-start border-r-[1px]
      border-purple-700 bg-purple-900 px-5 pt-3 transition-transform duration-700 sm:fixed sm:flex sm:translate-x-0`}
    >
      <Link href="/" className="mt-7 cursor-pointer ">
        <Image
          src={"/icons/home.svg"}
          width={26}
          height={26}
          alt="Chat with Code Genius"
        />
      </Link>
      <div
        className="mt-8 cursor-pointer"
        onClick={() => setOpenSecondayNavBar((prevState) => !prevState)}
      >
        <Image
          src={"/icons/code-browser.svg"}
          width={26}
          height={26}
          className=""
          alt="Choose your code mode"
        />
      </div>
      <Link href="/code-chat" className="mt-8 cursor-pointer">
        <Image
          src={"/icons/message-chat-square.svg"}
          width={26}
          height={26}
          alt="Chat with Code Genius"
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
