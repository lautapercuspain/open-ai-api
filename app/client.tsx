"use client"

import HeaderWrapper from "./components/shared/HeaderWrapper"
import SuperHero from "./home/SuperHero"
import HomeChat from "./home/HomeChat"
import Feature from "./home/Feature"

import { useSignInModal } from "./components/modals/SignInModal"

export default function Client({ session, userHasAccount }) {
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
      <HomeChat />
      <Feature setShowSignInModal={setShowSignInModal} />
    </>
  )
}
