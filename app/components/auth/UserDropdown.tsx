"use client"

import { useEffect, useState } from "react"
import { signOut, useSession } from "next-auth/react"
import { SunMedium, Moon, LayoutDashboard } from "lucide-react"
import { LampDesk, LogOut, Laptop } from "lucide-react"
import { FADE_IN_ANIMATION_SETTINGS, LSConfig } from "@/lib/constants"
import useLocalStorage from "hooks/use-localstorage"
import Popover from "app/components/shared/Popover"
import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"
import Dashboard from "app/dashboard/page"

export default function UserDropdown({ session }) {
  const { email, image } = session?.user || {}
  const [colorMode, setColorMode] = useLocalStorage(LSConfig.colorMode, "")
  const [openPopover, setOpenPopover] = useState(false)

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
      className="relative z-auto inline-block text-left"
      {...FADE_IN_ANIMATION_SETTINGS}
    >
      <Popover
        content={
          <div className=" mt-3 w-full rounded-md bg-white p-2 sm:w-56">
            <button className="text-sm relative flex w-full items-center justify-start space-x-2 rounded-md p-2 text-left transition-all duration-75 hover:bg-gray-100">
              <LayoutDashboard className="h-4 w-4" />
              <Link href="/dashboard">
                <p className="text-sm">Dashboard</p>
              </Link>
            </button>
            <button className="text-sm relative flex w-full items-center justify-start space-x-2 rounded-md p-2 text-left transition-all duration-75 hover:bg-gray-100">
              <LampDesk className="h-4 w-4" />
              <Link href="/code-idea">
                <p className="text-sm">Code Idea</p>
              </Link>
            </button>
            <button className="text-sm relative flex w-full items-center justify-start space-x-2 rounded-md p-2 text-left transition-all duration-75 hover:bg-gray-100">
              <Laptop className="h-4 w-4" />
              <Link href="/code-chat">
                <p className="text-sm">My Chat</p>
              </Link>
            </button>
            {/* <button
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
            </button> */}
            <button
              className="text-sm relative flex w-full items-center justify-start space-x-2 rounded-md p-2 text-left transition-all duration-75 hover:bg-gray-100"
              onClick={() => signOut()}
            >
              <LogOut className="h-4 w-4" />
              <p className="text-sm">Logout</p>
            </button>
          </div>
        }
        align="end"
        openPopover={openPopover}
        setOpenPopover={setOpenPopover}
      >
        <button
          onClick={() => setOpenPopover(!openPopover)}
          className="mr-2.5 mt-2 flex h-8 w-8 items-end justify-end overflow-hidden rounded-full focus:outline-none sm:h-9 sm:w-9"
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
