"use client"

import Link from "next/link"
import UserDropdown from "app/components/auth/UserDropdown"
import Image from "next/image"
import { usePathname } from "next/navigation"

export default function Header({
  session,
  userHasAccount,
  setShowSignInModal,
}: {
  session: any
  showSignInModal?: any
  userHasAccount?: any
  setShowSignInModal: any
}) {
  const pathname = usePathname()

  const shouldHideLogo = pathname === "/code-idea" || pathname === "/code-chat"
  return (
    <>
      <div
        id="site-header"
        className={`absolute top-0 w-full bg-transparent transition-all`}
      >
        <div className="flex items-center justify-between">
          <div
            className={` ${
              pathname === "/pricing" ? "ml-4" : "ml-4"
            } mt-4 sm:ml-14`}
          >
            <Link href="/" className={` flex sm:mx-0`}>
              <div
                className={`flex ${
                  pathname !== "/" ? "mt-1 sm:ml-24" : "mt-1 sm:ml-2"
                }`}
              >
                {!shouldHideLogo && (
                  <>
                    <Image
                      src={"/logo/code-genius.svg"}
                      width={32}
                      height={32}
                      className={"right-8"}
                      alt="Code Genius"
                    />
                    <h1
                      className={`text-lg sm:text-xl sm:text-xl mt-1 ml-2
                    bg-gradient-to-r from-[#A1FFE0] to-[#2C9DC0] bg-clip-text font-sans text-2xl font-bold tracking-tight text-transparent  sm:leading-6`}
                    >
                      Code Genius
                    </h1>
                  </>
                )}
              </div>
            </Link>
          </div>
          <div className="flex h-8">
            <div
              onClick={() => setShowSignInModal(true)}
              className={`my-auto mt-2 mr-4 flex cursor-pointer flex-row items-start justify-center rounded-lg sm:mr-16 ${
                !session
                  ? "bg-gradient-to-r from-[#A1FFE0] to-[#2C9DC0]"
                  : "bg-transparent"
              }  p-[1.5px] font-sans`}
            >
              {!session && (
                <div className={`relative h-9 w-auto rounded-lg bg-purple-800`}>
                  <p className="text-sm my-auto px-2 pt-1 text-center leading-7 text-white">
                    {!userHasAccount ? "Sign In" : "Sign Up"}
                  </p>
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
