import "../styles/globals.css"
import SessionProvider from "./provider"
import Header from "app/components/Header"
import Footer from "app/components/Footer"
import { getServerSession } from "next-auth/next"
import { authOptions } from "pages/api/auth/[...nextauth]"
import { Poppins } from "next/font/google"
import { cookies } from "next/headers"

const popins = Poppins({
  variable: "--font-popins",
  subsets: ["latin"],
  weight: ["100", "300", "600"],
})
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)
  const cookieStore = cookies()
  const userHasAccount =
    cookieStore.get("next-auth.session-token")?.value !== ""

  return (
    <>
      <html lang="en" className={`${popins.variable} font-popins`}>
        <head>
          <link rel="icon" href="/favicon.ico" />
        </head>
        <body className="bg-purple-800">
          <SessionProvider>
            <Header session={session} userHasAccount={userHasAccount} />
            <div className="flex min-h-screen flex-nowrap">{children}</div>
            {/* <Footer /> */}
          </SessionProvider>
        </body>
      </html>
    </>
  )
}
