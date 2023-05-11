import { getServerSession } from "next-auth"
import { authOptions } from "pages/api/auth/[...nextauth]"
import { cookies } from "next/headers"
import Client from "./client"
import Footer from "./components/Footer"

export const metadata = {
  title: "Create Genius Code",
  description:
    "A tool that will help you find quick and more innovative solutions using AI and specifically trained models to make the developer's life easier.",
}
export default async function Page() {
  const session = await getServerSession(authOptions)

  const cookieStore = cookies()
  const csrfTokenValue = cookieStore.get("next-auth.csrf-token")?.value

  const userHasAccount = csrfTokenValue !== "" && csrfTokenValue !== undefined
  return (
    <>
      <main className={`mx-auto max-w-max pb-10`}>
        <Client session={session} userHasAccount={userHasAccount} />
        <Footer session={session} />
      </main>
    </>
  )
}

{
  /* <Subscription /> */
}
