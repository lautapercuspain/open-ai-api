"use client"

import { motion } from "framer-motion"
import UserMenu from "./UserMenu"

export default function UserDropdown({ session }) {
  const { email, image } = session?.user || {}

  // Dark vs Light Mode
  // useEffect(() => {
  //   try {
  //     if (colorMode === "dark") {
  //       document.getElementsByTagName("html")[0].classList.add("dark")
  //     } else {
  //       document.getElementsByTagName("html")[0].classList.remove("dark")
  //     }
  //   } catch (_) {}
  // }, [colorMode])

  if (!email) return null

  return (
    <motion.div className="flex items-end justify-end transition-all duration-75 hover:bg-purple-500">
      <UserMenu session={session} email={email} image={image} />
    </motion.div>
  )
}
