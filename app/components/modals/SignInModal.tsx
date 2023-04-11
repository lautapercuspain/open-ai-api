"use client"

import { signIn } from "next-auth/react"
import { useState, Dispatch, SetStateAction, useCallback, useMemo } from "react"
import Image from "next/image"
import BaseModal from "app/components/modals/BaseModal"
import { Poppins } from "next/font/google"
import GithubLogo from "public/icons/github.svg"
import GmailLogo from "public/icons/gmail.svg"
import useWindowSize from "hooks/use-window-size"

const popins = Poppins({
  variable: "--font-popins",
  subsets: ["latin"],
  weight: ["100", "300", "600"],
})

const SignInModal = ({
  showSignInModal,
  setShowSignInModal,
}: {
  showSignInModal: boolean
  setShowSignInModal: Dispatch<SetStateAction<boolean>>
}) => {
  const [signInClickedGitHub, setSignInClickedGitHub] = useState<boolean>(false)
  const [signInClickedGoogle, setSignInClickedGoogle] = useState<boolean>(false)
  const { windowSize, isMobile, isDesktop } = useWindowSize()

  return (
    <BaseModal showModal={showSignInModal} setShowModal={setShowSignInModal}>
      {/* MAIN DIV - BACKGROUND*/}
      <div className="rounded-2xl bg-purple-700 p-4 sm:h-[487px] sm:w-[504.01px]">
        {/* INNER DIV - FLEX CONTAINER */}
        {/* TITLE + SUBTITLE */}
        <div className="flex flex-col content-center justify-start justify-items-start gap-4 sm:p-12">
          <div className="mb-4 mt-8 flex flex-col content-center justify-start justify-items-start gap-4 sm:mb-8 sm:mt-0">
            <h1
              className={`${popins.variable} text-center text-[28px] font-[700] leading-6 text-white sm:text-left sm:text-[30px]`}
            >
              Create your Account
            </h1>
            <h6 className="text-center font-mono text-[16px] font-[400] leading-10 text-gray-200 sm:text-left sm:text-[20px]">
              Start coding with Code Genius
            </h6>
          </div>
          {/* DIVIDER */}
          <hr className="border-1 border-purple-500 sm:w-[384.01px]" />
          {/* BUTTONS */}
          <div
            className={`flex ${
              isMobile ? "flex-row" : "flex-col"
            } mb-8 content-center justify-start justify-items-start gap-4`}
          >
            {/* GITHUB BUTTON */}
            <button
              disabled={signInClickedGitHub}
              className={
                "h-[40px] w-full rounded-lg bg-black sm:h-[80px] sm:w-[380px]"
              }
              onClick={() => {
                setSignInClickedGitHub(true)
                signIn("github", {
                  callbackUrl: process.env.NEXTAUTH_URL,
                })
              }}
            >
              {signInClickedGitHub ? (
                <p className="text-[28px] font-[700] text-white">Loading...</p>
              ) : (
                <div className="inline-flex content-center justify-center justify-items-center gap-2">
                  <Image
                    width={32}
                    height={32}
                    alt="Github Logo"
                    src={GithubLogo.src} // Should use a logo that includes company font
                    className="flex h-[25.51px] w-[26.15px] self-center"
                  />
                  <p className="text-[28px] font-[700] text-white">GitHub</p>
                </div>
              )}
            </button>
            {/* GOOGLE BUTTON */}
            <button
              disabled={signInClickedGoogle}
              className={
                "h-[40px] w-full rounded-lg bg-white sm:h-[80px] sm:w-[380px]"
              }
              onClick={() => {
                setSignInClickedGoogle(true)
                signIn("google", {
                  callbackUrl: process.env.NEXTAUTH_URL,
                })
              }}
            >
              {signInClickedGoogle ? (
                <p className="text-[28px] font-[700] text-gray-800">
                  Loading...
                </p>
              ) : (
                <div className="inline-flex content-center justify-center justify-items-center gap-2">
                  <Image
                    width={32}
                    height={32}
                    alt="Gmail Logo"
                    src={GmailLogo.src} // Should use a logo that includes company font
                    className="flex h-[38px] w-[38x] self-center"
                  />
                  <p className="text-[28px] font-[700] text-gray-500">Gmail</p>
                </div>
              )}
            </button>
          </div>
        </div>
      </div>
    </BaseModal>
  )
}

export function useSignInModal() {
  const [showSignInModal, setShowSignInModal] = useState(false)

  const SignInModalCallback = useCallback(() => {
    return (
      <SignInModal
        showSignInModal={showSignInModal}
        setShowSignInModal={setShowSignInModal}
      />
    )
  }, [showSignInModal, setShowSignInModal])

  return useMemo(
    () => ({ setShowSignInModal, SignInModal: SignInModalCallback }),
    [setShowSignInModal, SignInModalCallback],
  )
}
