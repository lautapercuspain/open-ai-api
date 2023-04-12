"use client"

import Link from "next/link"
import { useSignInModal } from "./modals/SignInModal"
import { LSConfig } from "@/lib/constants"
import UserDropdown from "app/components/auth/UserDropdown"
import { useEffect } from "react"
import useLocalStorage from "hooks/use-localstorage"
import Image from "next/image"
import { Rubik } from "next/font/google"

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
  weight: ["400", "300", "600"],
})

export default function Header({ session }) {
  // const pathname = usePathname()
  const { SignInModal, setShowSignInModal } = useSignInModal()
  const [userId, setUserId] = useLocalStorage(LSConfig.user.userId, "")

  useEffect(() => {
    if (session?.user?.id) {
      setUserId(session?.user?.id)
    }
  }, [session, setUserId])
  return (
    <>
      <SignInModal />
      <div
        className={`absolute top-0 z-30 w-full bg-transparent transition-all`}
      >
        <div className="mx-0 flex items-center justify-between md:mx-10">
          <div className="ml-2 sm:ml-7">
            <Link href="/" className="mx-auto mt-5 ml-12 flex sm:mx-0">
              {/* <Image
                src={"/code-genius.svg"}
                width={38}
                height={38}
                className={" mr-1"}
                alt="Code Genius"
              /> */}

              <h1
                className={`${rubik.variable} text-lg sm:text-xl sm:text-xl mt-2  ml-11 bg-gradient-to-r from-[#A1FFE0] to-[#2C9DC0] bg-clip-text font-rubik text-2xl font-bold tracking-tight text-transparent max-md:pt-4 max-sm:pt-0 sm:leading-6`}
              >
                Code Genius
              </h1>
            </Link>
          </div>
          <div className="flex h-10 items-end">
            {/* <div className="text-lg  hidden cursor-pointer font-mono font-bold text-white sm:block">
              Pricing
            </div> */}
            <div
              className={`my-auto mx-2 mt-2 flex cursor-pointer flex-row items-start justify-center rounded-lg ${
                !session ? "bg-mint" : "bg-transparent"
              }   p-2 font-mono`}
            >
              <Image
                src={"/icons/code-blocks.svg"}
                width={15}
                height={15}
                className={`mt-1 mr-1 ${session ? "hidden" : "block"}`}
                alt="Code Blocks"
              />
              {!session ? (
                <div
                  className="text-sm  font-bold text-purple-800"
                  onClick={() => setShowSignInModal(true)}
                >
                  {userId ? "Login" : "Create Account"}
                </div>
              ) : (
                <UserDropdown />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
