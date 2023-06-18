"use client"

import dynamic from "next/dynamic"

import { useSignInModal } from "./components/modals/SignInModal"
import Script from "next/script"
import SuperHero from "./home/SuperHero"
import { Loader2 } from "lucide-react"

const HeaderWrapper = dynamic(
  () => import("./components/shared/HeaderWrapper"),
  {
    loading: () => (
      <Loader2
        size={20}
        color="white"
        className="hidden h-8 w-8 animate-spin"
      />
    ),
  },
)

const HomeChat = dynamic(() => import("./home/HomeChat"), {
  loading: () => (
    <Loader2 size={20} color="white" className="hidden h-8 w-8 animate-spin" />
  ),
})

const Feature = dynamic(() => import("./home/Feature"), {
  loading: () => (
    <Loader2 size={20} color="white" className="hidden h-8 w-8 animate-spin" />
  ),
})

export default function Client({
  session,
  userHasAccount,
  ip,
  apiCalls,
  loggedUserData,
}) {
  const { SignInModal, setShowSignInModal, showSignInModal } = useSignInModal({
    userHasAccount,
  })

  return (
    <>
      <SignInModal />
      <div className="absolute -right-[300px] -top-[300px] items-center justify-center before:absolute before:left-0 before:top-0 before:block before:h-full before:w-full before:rounded-full before:bg-gradient-to-br before:from-mint/20 before:to-blue/30 before:blur-[120px] before:content-['']  md:mx-auto md:h-[950px] md:w-[950px] lg:flex"></div>
      <HeaderWrapper
        setShowSignInModal={setShowSignInModal}
        showSignInModal={showSignInModal}
        session={session}
        userHasAccount={userHasAccount}
      />
      <SuperHero />
      <HomeChat
        ip={ip}
        apiCalls={apiCalls}
        session={session}
        loggedUserData={loggedUserData}
      />
      <Feature session={session} setShowSignInModal={setShowSignInModal} />
      {/* <div className="mt-5 flex justify-center">
        <Link
          href="https://www.producthunt.com/posts/code-genius?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-code&#0045;genius"
          target="_blank"
        >
          <Image
            src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=395710&theme=light"
            alt="Code&#0032;Genius - Simplify&#0032;development&#0032;with&#0032;the&#0032;AI&#0045;powered&#0032;code&#0032;companion | Product Hunt"
            width={250}
            height={54}
          />
        </Link>
      </div> */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-WHLZCV41W9"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-WHLZCV41W9');`,
        }}
      />
    </>
  )
}
