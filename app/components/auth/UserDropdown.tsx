"use client"

import { useEffect, useState } from "react"
import { signOut, useSession } from "next-auth/react"
import { LayoutDashboard } from "lucide-react"
import { LampDesk, LogOut, Laptop } from "lucide-react"
import { FADE_IN_ANIMATION_SETTINGS, LSConfig } from "@/lib/constants"
import useLocalStorage from "hooks/use-localstorage"
import Popover from "app/components/shared/Popover"
import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"

export default function UserDropdown({ session, setShowSignInModal }) {
  const { email, image } = session?.user || {}
  const [colorMode, setColorMode] = useLocalStorage(LSConfig.colorMode, "")
  const [openPopover, setOpenPopover] = useState(false)

  useEffect(() => {
    setShowSignInModal(false)
  }, [])

  useEffect(() => {
    try {
      if (colorMode === "dark") {
        document.getElementsByTagName("html")[0].classList.add("dark")
      } else {
        document.getElementsByTagName("html")[0].classList.remove("dark")
      }
    } catch (_) {}
  }, [colorMode])

  if (!email) return null

  return (
    <motion.div
      className="absolute right-4 top-4 z-auto inline-block text-left"
      {...FADE_IN_ANIMATION_SETTINGS}
    >
      <Popover
        content={
          <div className="w-full rounded-md bg-purple-700 sm:w-56">
            <button className="text-sm relative flex w-full items-center justify-start space-x-2 rounded-md p-2 text-left transition-all duration-75 hover:bg-purple-500">
              <LayoutDashboard color="white" className="h-4 w-4" />
              <Link href="/dashboard">
                <p className="text-sm text-white">Dashboard</p>
              </Link>
            </button>
            <button className="text-sm relative flex w-full items-center justify-start space-x-2 rounded-md p-2 text-left transition-all duration-75 hover:bg-purple-500">
              <LampDesk color="white" className="h-4 w-4" />
              <Link href="/code-idea">
                <p className="text-sm text-white">Code Idea</p>
              </Link>
            </button>
            <button className="text-sm relative flex w-full items-center justify-start space-x-2 rounded-md p-2 text-left transition-all duration-75 hover:bg-purple-500">
              <Laptop color="white" className="h-4 w-4" />
              <Link href="/code-chat">
                <p className="text-sm text-white">My Chat</p>
              </Link>
            </button>

            <button
              className="text-sm relative flex w-full items-center justify-start space-x-2 rounded-md p-2 text-left transition-all duration-75 hover:bg-purple-500"
              onClick={() => signOut({ callbackUrl: "/" })}
            >
              <LogOut color="white" className="h-4 w-4" />
              <p className="text-sm text-white">Logout</p>
            </button>
          </div>
        }
        align="end"
        openPopover={openPopover}
        setOpenPopover={setOpenPopover}
      >
        <button
          onClick={() => setOpenPopover(!openPopover)}
          className="mr-1 mt-1 flex h-8 w-8 items-end justify-end overflow-hidden rounded-full focus:outline-none sm:h-9 sm:w-9"
        >
          <Image
            className=""
            alt={email}
            src={image || `https://avatars.dicebear.com/api/micah/${email}.svg`}
            width={40}
            height={40}
          />
        </button>
      </Popover>
    </motion.div>
  )
}

{
  /* <button
              onClick={
                colorMode === "dark"
                  ? () => setColorMode("ligth")
                  : () => setColorMode("dark")
              }
              className="text-sm relative flex w-full items-center justify-start space-x-2 rounded-md p-2 text-left transition-all duration-75 hover:bg-gray-100"
            >
              {colorMode === "dark" ? (
                <SunMedium className="h-4 w-4" color={"black"} />
              ) : (
                <Moon
                  className="h-4 w-4"
                  color={colorMode === "dark" ? "white" : "black"}
                />
              )}
              <Link href={"#"}>
                <p className="text-sm ">
                  {colorMode === "dark" ? "Ligth Mode" : "Dark Mode"}
                </p>
              </Link>
            </button> */
}
