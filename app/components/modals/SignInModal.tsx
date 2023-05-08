"use client"

import { signIn } from "next-auth/react"
import { useState, Dispatch, SetStateAction, useCallback, useMemo } from "react"
import Image from "next/image"
import BaseModal from "app/components/modals/BaseModal"
import { Inter } from "next/font/google"
import GmailLogo from "public/icons/gmail.svg"
import useWindowSize from "hooks/use-window-size"
import Git from "../icons/git"

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["100", "300", "400", "600", "700"],
})

const SignInModal = ({
  userHasAccount,
  showSignInModal,
  setShowSignInModal,
}: {
  showSignInModal: boolean
  userHasAccount?: boolean
  setShowSignInModal: Dispatch<SetStateAction<boolean>>
}) => {
  const [signInClickedGitHub, setSignInClickedGitHub] = useState<boolean>(false)
  const [signInClickedGoogle, setSignInClickedGoogle] = useState<boolean>(false)
  const { isMobile } = useWindowSize()

  return (
    <BaseModal showModal={showSignInModal} setShowModal={setShowSignInModal}>
      {/* MAIN DIV - BACKGROUND*/}
      <div className="bg-purple-700 p-4 sm:h-[400px] sm:w-[504.01px] sm:rounded-2xl">
        {/* INNER DIV - FLEX CONTAINER */}
        {/* TITLE + SUBTITLE */}
        <div className="flex flex-col content-center justify-start justify-items-start gap-4 sm:p-12">
          <div className="mb-4 mt-8 flex flex-col content-center justify-start justify-items-start gap-4 sm:mb-8 sm:mt-0">
            <h1
              className={`${inter.variable} text-center text-[28px] font-[700] leading-6 text-white  sm:text-[30px]`}
            >
              {userHasAccount
                ? "Login into your account"
                : "Create your Account"}
            </h1>
            <h6 className="sm:text-xl mx-auto max-w-xs  font-sans text-[16px] font-[400]  leading-10 text-gray-200">
              Start coding with the help of Code Genius
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
            {/* GOOGLE BUTTON */}
            <button
              disabled={signInClickedGoogle}
              className={
                "h-[45px] w-full rounded-lg border border-black bg-white sm:h-[60px] sm:w-[380px]"
              }
              onClick={() => {
                setSignInClickedGoogle(true)
                signIn("google", { callbackUrl: "/code-idea" })
              }}
            >
              {signInClickedGoogle ? (
                <p className="text-sm font-[700] text-gray-800 sm:text-[20px]">
                  Loading...
                </p>
              ) : (
                <div className="mt-1 inline-flex content-center justify-center justify-items-center gap-2 ">
                  <Image
                    height={111}
                    width={111}
                    alt="Google Login"
                    src={GmailLogo}
                    className="flex self-center"
                  />
                </div>
              )}
            </button>
            {/* GITHUB BUTTON */}
            <button
              disabled={signInClickedGitHub}
              className={
                "h-[45px] w-full rounded-lg border border-white bg-black sm:h-[60px] sm:w-[380px]"
              }
              onClick={() => {
                setSignInClickedGitHub(true)
                signIn("github", {
                  callbackUrl: "/code-idea",
                })
              }}
            >
              {signInClickedGitHub ? (
                <p className="text-[28px] font-[700] text-white">Loading...</p>
              ) : (
                <div className="mt-1 inline-flex content-center justify-center justify-items-center gap-2">
                  <Git />
                </div>
              )}
            </button>
          </div>
        </div>
      </div>
    </BaseModal>
  )
}

export function useSignInModal(userHasAccount?: boolean) {
  const [showSignInModal, setShowSignInModal] = useState(false)

  const SignInModalCallback = useCallback(() => {
    return showSignInModal ? (
      <SignInModal
        userHasAccount={userHasAccount}
        showSignInModal={showSignInModal}
        setShowSignInModal={setShowSignInModal}
      />
    ) : null
  }, [showSignInModal, setShowSignInModal])

  return useMemo(
    () => ({
      setShowSignInModal,
      SignInModal: SignInModalCallback,
      showSignInModal,
    }),
    [setShowSignInModal, SignInModalCallback, showSignInModal],
  )
}
