import "../styles/globals.css"
import SessionProvider from "./provider"
import Header from "app/components/Header"
import Footer from "app/components/Footer"
import { getServerSession } from "next-auth/next"
import { authOptions } from "pages/api/auth/[...nextauth]"
import { Inter } from "next/font/google"
import { cookies } from "next/headers"
import ModalsWrapper from "./components/shared/ModalsWrapper"
import { useSignInModal } from "./components/modals/SignInModal"
import HeaderWrapper from "./components/shared/HeaderWrapper"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "300", "400", "600", "700"],
})
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)
  const cookieStore = cookies()
  const csrfTokenValue = cookieStore.get("next-auth.csrf-token")?.value

  const userHasAccount = csrfTokenValue !== "" && csrfTokenValue !== undefined

  return (
    <>
      <html lang="en" className={`${inter.variable} font-inter`}>
        <head>
          <link rel="icon" href="/favicon.ico" />
        </head>
        <body className="bg-purple-900">
          <SessionProvider>
            <HeaderWrapper session={session} userHasAccount={userHasAccount} />
            <div className="flex min-h-screen flex-nowrap">{children}</div>
            {/* <Footer /> */}
          </SessionProvider>
        </body>
      </html>
    </>
  )
}
