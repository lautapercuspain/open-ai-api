"use client"

import useWindowSize from "hooks/use-window-size"
import {
  MessageSquare,
  Code2,
  Home,
  LayoutDashboard,
  Rocket,
  CurlyBraces,
  Code,
  FileCode,
  Menu,
} from "lucide-react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import tailwindConfig from "tailwind.config"

export default function SideBar({
  setOpenSecondayNavBar,
  mode,
}: {
  setOpenSecondayNavBar: any
  mode?: string
}) {
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  console.log("showMobileMenu:", showMobileMenu)
  // const [searchTerm, setSearchTerm] = useState("")
  // const userIsSearching = searchTerm !== ""
  const path = usePathname()
  const isMobile = useWindowSize()
  const colors: any = tailwindConfig.theme?.extend?.colors

  const CodeIdeaMode = ({ size }) => {
    if (mode === "smart") {
      return (
        <Code
          size={size}
          color={path === "/code-idea" ? colors.mint : "white"}
          className="ml-1.5 cursor-pointer border-purple-300 "
        />
      )
    } else if (mode === "test") {
      return (
        <CurlyBraces
          size={size}
          color={path === "/code-idea" ? colors.mint : "white"}
          className="ml-1.5 cursor-pointer border-purple-300 sm:mt-2 "
        />
      )
    } else if (mode === "improve") {
      return (
        <Rocket
          size={size}
          color={path === "/code-idea" ? colors.mint : "white"}
          className="ml-1.5 cursor-pointer border-purple-300 sm:mt-2 "
        />
      )
    } else if (mode === "docs") {
      return (
        <FileCode
          size={size}
          color={path === "/code-idea" ? colors.mint : "white"}
          className="ml-1.5 cursor-pointer border-purple-300 sm:mt-2"
        />
      )
    }
    return (
      <Code2
        size={size}
        color={path === "/code-idea" ? colors.mint : "white"}
        className={`ml-1.5 bg-purple-400 text-white`}
      />
    )
  }

  return !isMobile ? (
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
            <CodeIdeaMode size={26} />
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
  ) : (
    <div
      className={`absolute top-0 left-0 z-50 h-full font-inter ${
        showMobileMenu ? "w-80 bg-purple-600" : "w-16 bg-none"
      } flex-row items-start `}
    >
      <div
        onClick={() => {
          setShowMobileMenu((prevState) => !prevState)
        }}
        className="cursor-pointer"
      >
        <div className="p-3">
          <Menu color="white" className="mt-4 ml-3 border-purple-300 " />
        </div>
      </div>
      <div
        className={`flex flex-col items-start justify-start ${
          showMobileMenu ? "block" : "hidden"
        }`}
      >
        <Link
          href="/dashboard"
          className={`mt-8 w-[100%] ${
            path === "/dashboard" ? "bg-purple-500" : "bg-none"
          } cursor-pointer`}
        >
          <div className="ml-4 mt-4 inline-flex h-[40px]  w-auto items-start justify-start rounded-md pr-2">
            <Home
              width={26}
              height={26}
              color={path === "/dashboard" ? colors.mint : "white"}
              className="ml-1.5"
            />
            <p className="text-sm ml-4 pt-1 text-white">Dashboard</p>
          </div>
        </Link>
        <Link
          href="/code-chat"
          className={`mt-10 w-[100%] cursor-pointer ${
            path === "/code-chat" ? "bg-purple-500" : "bg-none"
          }`}
        >
          <div className="ml-4 mt-4 inline-flex h-[40px] w-auto items-start justify-start rounded-md pr-2">
            <MessageSquare
              width={26}
              height={26}
              color={path === "/code-chat" ? colors.mint : "white"}
              className="ml-1.5 text-white"
            />
            <p className="text-sm ml-4 pb-1 text-white">Code Chat</p>
          </div>
        </Link>

        <Link
          href="/code-idea"
          className={`mt-10 w-[100%] cursor-pointer ${
            path === "/code-idea" ? "bg-purple-500" : "bg-none"
          } `}
        >
          <div className="mt-4 ml-4 inline-flex h-[40px] items-start justify-start rounded-md pr-2">
            <CodeIdeaMode size={26} />
            <p className="text-sm ml-4 pb-1 text-white">Code Idea</p>
          </div>
        </Link>
      </div>
    </div>
  )
}
