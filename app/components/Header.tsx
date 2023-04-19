"use client"

import Link from "next/link"
import { useSignInModal } from "./modals/SignInModal"
import { LSConfig } from "@/lib/constants"
import UserDropdown from "app/components/auth/UserDropdown"
import { useEffect } from "react"
import useLocalStorage from "hooks/use-localstorage"
import Image from "next/image"
import { Rubik } from "next/font/google"
import { usePathname } from "next/navigation"

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
  weight: ["400", "300", "600"],
})

export default function Header({ session, userHasAccount }) {
  const pathname = usePathname()
  const { SignInModal, setShowSignInModal } = useSignInModal(userHasAccount)
  const [userId, setUserId] = useLocalStorage(LSConfig.user.userId, "")

  useEffect(() => {
    if (session?.user?.id) {
      setUserId(session?.user?.id)
    }
  }, [session, setUserId])

  return (
    <>
      {!session && <SignInModal />}
      <div
        className={`absolute top-0 z-30 w-full bg-transparent transition-all`}
      >
        <div className="ml- mx-0 flex items-center justify-between md:mx-10">
          <div
            className={`ml-2 ${
              pathname === "/code-idea" ? "sm:ml-24" : "sm:ml-7"
            }`}
          >
            <Link
              href="/"
              className={`mx-auto mt-5 ${
                pathname === "/code-idea" ? "sm:Pl-4" : "sm:ml-12"
              }  flex sm:mx-0`}
            >
              {pathname === "/" && (
                <Image
                  src={"/code-genius.svg"}
                  width={38}
                  height={38}
                  className={"mr-2"}
                  alt="Code Genius"
                />
              )}
              <h1
                className={`${rubik.variable}  ${
                  pathname === "/code-idea" ? "hidden" : "block"
                } text-lg sm:text-xl sm:text-xl mt-2  ml-3 bg-gradient-to-r from-[#A1FFE0] to-[#2C9DC0] bg-clip-text font-rubik text-2xl font-bold tracking-tight text-transparent max-md:pt-4 max-sm:pt-0 sm:leading-6`}
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
              onClick={() => setShowSignInModal(true)}
              className={`my-auto mx-2 mt-2 flex cursor-pointer flex-row items-start justify-center rounded-lg  ${
                !session
                  ? "bg-gradient-to-r from-[#A1FFE0] to-[#2C9DC0]"
                  : "bg-transparent"
              }  p-[2px] font-mono`}
            >
              <div className="relative h-[48px] w-[163px] rounded-lg bg-purple-800">
                {!session ? (
                  <div className="text-sm mt-3 text-center text-white">
                    {userHasAccount ? "Login" : "Create Account"}
                  </div>
                ) : (
                  <div className="absolute right-1">
                    <UserDropdown session={session} />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
