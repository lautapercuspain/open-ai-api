"use client"

import Link from "next/link"
import { LSConfig } from "@/lib/constants"
import UserDropdown from "app/components/auth/UserDropdown"
import { useEffect } from "react"
import useLocalStorage from "hooks/use-localstorage"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useSearchParams } from "next/navigation"

export default function Header({
  session,
  showSignInModal,
  userHasAccount,
  setShowSignInModal,
}: {
  session: any
  showSignInModal?: any
  userHasAccount?: any
  setShowSignInModal: any
}) {
  const pathname = usePathname()
  console.log("entra aqui en header")

  const [userId, setUserId] = useLocalStorage(LSConfig.user.userId, "")
  const searchParams = useSearchParams()
  const action = searchParams && searchParams.get("action")

  useEffect(() => {
    if (session?.user?.id) {
      setUserId(session?.user?.id)
    }
  }, [session, setUserId])

  return (
    <>
      <div
        id="site-header"
        className={`absolute top-0 z-30 w-full bg-transparent transition-all`}
      >
        <div className="flex items-center justify-between">
          <div
            className={` ${
              pathname === "/pricing" ? "ml-4" : "ml-16"
            } mt-4 sm:ml-14`}
          >
            <Link href="/" className={` flex sm:mx-0`}>
              <div
                className={`flex ${
                  pathname !== "/" ? "mt-1 sm:ml-24" : "sm:ml-2"
                }`}
              >
                <Image
                  src={"/logo/code-genius.svg"}
                  width={32}
                  height={32}
                  className={"right-8"}
                  alt="Code Genius"
                />

                <h1
                  className={`text-lg sm:text-xl sm:text-xl mt-1 ml-2  bg-gradient-to-r from-[#A1FFE0] to-[#2C9DC0] bg-clip-text font-sans text-2xl font-bold tracking-tight text-transparent  sm:leading-6`}
                >
                  Code Genius
                </h1>
              </div>
            </Link>
          </div>
          <div className="flex h-8  items-end">
            <div
              onClick={() => setShowSignInModal(true)}
              className={`my-auto mx-2 mt-2 mr-7 flex  cursor-pointer flex-row items-start justify-center rounded-lg sm:mr-16 ${
                !session
                  ? "bg-gradient-to-r from-[#A1FFE0] to-[#2C9DC0]"
                  : "bg-transparent"
              }  p-[1.5px] font-sans`}
            >
              {!session && (
                <div
                  className={`relative h-[40px] ${
                    !userHasAccount ? "w-24" : "ww-48"
                  } rounded-lg bg-purple-800 sm:h-[48px] `}
                >
                  <div className="text-sm mt-3 px-3 text-center leading-7 text-white">
                    {!userHasAccount ? "Sign In" : "Create Account"}
                  </div>
                </div>
              )}
            </div>
          </div>
          <UserDropdown session={session} />
        </div>
      </div>
    </>
  )
}
