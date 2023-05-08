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

  // useEffect(() => {
  //   if (action === "authenticate") {
  //     setShowSignInModal(true)
  //   }
  // }, [searchParams, action])

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
        <div className="flex items-center justify-between ">
          <div className={""}>
            <Link href="/" className={`mt-3 ml-2 flex  sm:mx-0`}>
              {pathname === "/" && (
                <Image
                  src={"/code-genius.svg"}
                  width={32}
                  height={32}
                  alt="Code Genius"
                />
              )}
              <h1
                className={` ${
                  pathname === "/code-idea" ? "hidden" : "block"
                } text-lg sm:text-xl sm:text-xl mt-2  ${
                  pathname === "/dashboard" || pathname === "/code-chat"
                    ? "hidden"
                    : "block"
                }  ml-2 bg-gradient-to-r from-[#A1FFE0] to-[#2C9DC0] bg-clip-text  font-sans text-2xl font-bold tracking-tight text-transparent  sm:leading-6`}
              >
                Code Genius
              </h1>
            </Link>
          </div>
          <div className="flex h-10 items-end">
            <div
              onClick={() => setShowSignInModal(true)}
              className={`my-auto mx-2 mt-2 mr-7 flex cursor-pointer flex-row items-start justify-center rounded-lg  ${
                !session
                  ? "bg-gradient-to-r from-[#A1FFE0] to-[#2C9DC0]"
                  : "bg-transparent"
              }  p-[1.5px] font-sans`}
            >
              {!session && (
                <div className="relative h-[48px] w-auto rounded-lg bg-purple-800 sm:h-[48px] ">
                  <div className="text-sm mt-3 px-2 text-center text-white">
                    {!userHasAccount ? "Login" : "Create Account"}
                  </div>
                </div>
              )}
            </div>
          </div>
          <UserDropdown
            session={session}
            setShowSignInModal={setShowSignInModal}
          />
        </div>
      </div>
    </>
  )
}
