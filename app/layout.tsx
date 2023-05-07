import "../styles/globals.css"
import SessionProvider from "./provider"

import { getServerSession } from "next-auth/next"
import { authOptions } from "pages/api/auth/[...nextauth]"
import { Inter, Roboto_Mono } from "next/font/google"
import { cookies } from "next/headers"
import HeaderWrapper from "./components/shared/HeaderWrapper"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
})
const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
})
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <html lang="en" className={`${inter.variable} ${roboto_mono.variable}`}>
        <head>
          <link rel="icon" href="/favicon.ico" />
        </head>
        <body suppressHydrationWarning={true} className="bg-purple-900">
          <SessionProvider>
            <div className="flex min-h-screen flex-nowrap">{children}</div>
          </SessionProvider>
        </body>
      </html>
    </>
  )
}
