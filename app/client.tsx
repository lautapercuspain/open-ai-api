"use client"

import HeaderWrapper from "./components/shared/HeaderWrapper"
import SuperHero from "./home/SuperHero"
import HomeChat from "./home/HomeChat"
import Feature from "./home/Feature"

import { useSignInModal } from "./components/modals/SignInModal"
import { useUserIp } from "utils/useUserIp"

export default function Client({ session, userHasAccount }) {
  const ip = useUserIp()
  const { SignInModal, setShowSignInModal, showSignInModal } = useSignInModal({
    userHasAccount,
  })

  return (
    <>
      <SignInModal />
      <HeaderWrapper
        setShowSignInModal={setShowSignInModal}
        showSignInModal={showSignInModal}
        session={session}
        userHasAccount={userHasAccount}
      />
      <SuperHero />
      <HomeChat ip={ip} />
      <Feature setShowSignInModal={setShowSignInModal} />
    </>
  )
}
