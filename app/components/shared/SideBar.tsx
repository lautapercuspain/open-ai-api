"use client"

import { Code, Rocket, Bug, FileCode, CurlyBraces, Home } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import tailwindConfig from "tailwind.config"
import SearchBar from "./SearchBar"

const colors: any = tailwindConfig.theme?.extend?.colors

export default function SideBar({ setOpenSecondayNavBar }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const [searchTerm, setSearchTerm] = useState("")
  const userIsSearching = searchTerm !== ""

  return (
    <div
      id="sidebar"
      className={`absolute top-0 left-0 hidden h-full -translate-x-full flex-col items-start border-r border-purple-400 
      transition-transform duration-700 sm:relative sm:flex sm:translate-x-0 ${
        sidebarOpen ? "w-68" : "w-[65px]"
      } bg-purple-700 px-5 pt-3`}
    >
      <Link href="/" className="mt-7  cursor-pointer">
        <Image
          src={"/icons/home.svg"}
          width={26}
          height={26}
          alt="Chat with Code Genius"
        />
      </Link>

      <Link href="/code-chat" className="mt-8 cursor-pointer">
        <Image
          src={"/icons/message-chat-square.svg"}
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
          alt="Choose your code mode"
        />
      </div>
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
