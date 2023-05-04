import { authOptions } from "pages/api/auth/[...nextauth]"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import Client from "./client"

export default async function Page() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect("/?action=authenticate&referer=chat")
  }

  return (
    <>
      <main className="mt-24 flex w-full flex-1 flex-col items-center justify-center px-4 text-center sm:mt-20">
        <Client session={session} />
      </main>
    </>
  )
}
