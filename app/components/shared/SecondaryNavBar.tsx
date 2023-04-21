"use client"

import { Code, Rocket, FileCode, CurlyBraces, Home } from "lucide-react"
import { useState } from "react"
import tailwindConfig from "tailwind.config"

const colors: any = tailwindConfig.theme?.extend?.colors

export default function SecondaryNavBar({
  isCodeModeSelected,
  openSecondayNavBar,
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
  const [sidebarOpen, setSidebarOpen] = useState(openSecondayNavBar)
  //   const [searchTerm, setSearchTerm] = useState("")
  //   const userIsSearching = searchTerm !== ""
  console.log("isCodeModeSelected", isCodeModeSelected)

  return (
    <div
      id="secondary-sidebar"
      className={`${
        isCodeModeSelected ? "hidden" : "block"
      } absolute top-0 left-[64px] z-20 h-auto flex-col items-start
         bg-purple-900 
      px-5 transition-transform duration-700 
        sm:flex sm:translate-x-0`}
    >
      {/* <SearchBar
        userIsSearching={userIsSearching}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      /> */}

      <div
        className="mt-10 inline-flex h-12"
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
          className="cursor-pointer border-purple-300"
        />
        <p
          className={`ml-4 w-[200px] ${sidebarOpen ? "block" : "hidden"} ${
            smartSelected ? "text-mint" : "text-white"
          } -mt-2 cursor-pointer rounded-md p-2 hover:bg-purple-500`}
        >
          Code Suggestions
        </p>
      </div>
      <div
        className="mt-0 inline-flex h-12"
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
          className={`ml-4 w-[200px] ${sidebarOpen ? "block" : "hidden"}  ${
            improveSelected ? "text-mint" : "text-white"
          } cursor-pointer rounded-md pt-2 pl-2 hover:bg-purple-500`}
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
          className={`ml-4 w-[200px]  ${sidebarOpen ? "block" : "hidden"} ${
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
          className={`ml-4 w-[200px] ${
            docSelected ? "text-mint" : "text-white"
          } ${
            sidebarOpen ? "block" : "hidden"
          } cursor-pointer rounded-md p-2 hover:bg-purple-500 `}
        >
          Docs Generation
        </p>
      </div>
    </div>
  )
}