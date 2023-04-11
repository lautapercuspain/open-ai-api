"use client"

import { Code, Rocket, BugIcon, FileCode, CurlyBraces } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import tailwindConfig from "tailwind.config"
import SearchBar from "./SearchBar"

const colors: any = tailwindConfig.theme?.extend?.colors

export default function SideBar({
  improveSelected,
  setImproveSelected,
  smartSelected,
  setSmartSelected,
  docSelected,
  setDocSelected,
  bugSelected,
  setBugSelected,
  testSelected,
  setTestSelected,
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const [searchTerm, setSearchTerm] = useState("")
  const userIsSearching = searchTerm !== ""

  return (
    <div
      id="sidebar"
      className={`absolute top-0 left-0 hidden h-full -translate-x-full flex-col items-start border-r border-purple-400 transition-transform duration-700 sm:relative sm:flex sm:translate-x-0 ${
        sidebarOpen ? "w-68" : "w-[65px]"
      } bg-purple-700 px-5 pt-3`}
    >
      <Image
        alt="Code Genius"
        src={"/logo.svg"}
        width={24}
        height={24}
        className="mb-8"
      />
      <SearchBar
        userIsSearching={userIsSearching}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <div
        className="mt-5 inline-flex h-12"
        onClick={() => {
          setSidebarOpen(!sidebarOpen)
          if (!smartSelected) {
            setSmartSelected(!smartSelected)
          }
          setBugSelected(false)
          setTestSelected(false)
          setDocSelected(false)
          setImproveSelected(false)
        }}
      >
        <Code
          size={26}
          color={smartSelected ? colors.mint : "white"}
          className="mt-2 cursor-pointer border-purple-300"
        />
        <p
          className={`ml-4 w-56 ${sidebarOpen ? "block" : "hidden"} ${
            smartSelected ? "text-mint" : "text-white"
          } cursor-pointer rounded-md p-2 hover:bg-purple-500`}
        >
          Code Suggestions
        </p>
      </div>
      <div
        className="mt-2 inline-flex h-12"
        onClick={() => {
          setSidebarOpen(!sidebarOpen)
          if (!bugSelected) {
            setBugSelected(!bugSelected)
          }
          setSmartSelected(false)
          setTestSelected(false)
          setDocSelected(false)
          setImproveSelected(false)
        }}
      >
        <BugIcon
          size={26}
          color={bugSelected ? colors.mint : "white"}
          className="mt-2 cursor-pointer border-purple-300 "
        />
        <p
          className={`ml-4 w-56 ${bugSelected ? "text-mint" : "text-white"} ${
            sidebarOpen ? "block" : "hidden"
          } cursor-pointer rounded-md p-2 hover:bg-purple-500 `}
        >
          Bug Fixing
        </p>
      </div>
      <div
        className="mt-2 inline-flex h-12"
        onClick={() => {
          setSidebarOpen(!sidebarOpen)
          if (!improveSelected) {
            setImproveSelected(!improveSelected)
          }
          setBugSelected(false)
          setSmartSelected(false)
          setTestSelected(false)
          setDocSelected(false)
        }}
      >
        <Rocket
          size={26}
          color={improveSelected ? colors.mint : "white"}
          className="mt-2 cursor-pointer border-purple-300 "
        />
        <p
          className={`ml-4 w-56 ${sidebarOpen ? "block" : "hidden"}  ${
            improveSelected ? "text-mint" : "text-white"
          } cursor-pointer rounded-md p-2 hover:bg-purple-500`}
        >
          Improve Code
        </p>
      </div>
      <div
        className="mt-2 inline-flex h-12"
        onClick={() => {
          setSidebarOpen(!sidebarOpen)
          if (!testSelected) {
            setTestSelected(!testSelected)
          }
          setSmartSelected(false)
          setBugSelected(false)
          setDocSelected(false)
          setImproveSelected(false)
        }}
      >
        <CurlyBraces
          size={26}
          color={testSelected ? colors.mint : "white"}
          className="mt-2 cursor-pointer border-purple-300 "
        />
        <p
          className={`ml-4 w-56  ${sidebarOpen ? "block" : "hidden"} ${
            testSelected ? "text-mint" : "text-white"
          } cursor-pointer rounded-md p-2 hover:bg-purple-500`}
        >
          Test Generation
        </p>
      </div>
      <div
        className="mt-2 inline-flex h-12"
        onClick={() => {
          setSidebarOpen(!sidebarOpen)
          if (!docSelected) {
            setDocSelected(!docSelected)
          }
          setSmartSelected(false)
          setBugSelected(false)
          setTestSelected(false)
          setImproveSelected(false)
        }}
      >
        <FileCode
          size={26}
          color={docSelected ? colors.mint : "white"}
          className="mt-2 cursor-pointer border-purple-300"
        />
        <p
          className={`ml-4 w-56 ${docSelected ? "text-mint" : "text-white"} ${
            sidebarOpen ? "block" : "hidden"
          } cursor-pointer rounded-md p-2 hover:bg-purple-500 `}
        >
          Docs Generation
        </p>
      </div>
    </div>
  )
}
