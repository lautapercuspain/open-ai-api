"use client"

import Header from "../Header"

export default function HeaderWrapper({
  session,
  userHasAccount,
  setShowSignInModal,
  showSignInModal,
}) {
  console.log("entra aqui en header wrapper")

  return (
    <>
      <Header
        showSignInModal={showSignInModal}
        session={session}
        userHasAccount={userHasAccount}
        setShowSignInModal={setShowSignInModal}
      />
    </>
  )
}
