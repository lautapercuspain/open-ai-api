import "../styles/globals.css"
import SessionProvider from "./provider"
import { Inter, Roboto_Mono } from "next/font/google"
import { authOptions } from "pages/api/auth/[...nextauth]"
import { getServerSession } from "next-auth"
import Footer from "./components/Footer"

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
  const session = await getServerSession(authOptions)
  return (
    <>
      <html lang="en" className={`${inter.variable} ${roboto_mono.variable}`}>
        <head>
          <link rel="icon" href="/favicon.ico" />
        </head>
        <body suppressHydrationWarning={true} className="bg-purple-900">
          <SessionProvider>
            <div className="flex min-h-screen flex-nowrap">{children}</div>
            <Footer session={session} />
          </SessionProvider>
        </body>
      </html>
    </>
  )
}
