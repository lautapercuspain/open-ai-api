"use client"

import Header from "../Header"
import { useSignInModal } from "../modals/SignInModal"
import ModalsWrapper from "./ModalsWrapper"

export default function HeaderWrapper({ session, userHasAccount }) {
  const { SignInModal, setShowSignInModal, showSignInModal } =
    useSignInModal(userHasAccount)

  return (
    <>
      <Header
        showSignInModal={showSignInModal}
        SignInModal={SignInModal}
        session={session}
        userHasAccount={userHasAccount}
        setShowSignInModal={setShowSignInModal}
      />
    </>
  )
}
