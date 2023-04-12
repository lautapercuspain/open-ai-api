import Client from "./client"
import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation"
import { authOptions } from "pages/api/auth/[...nextauth]"

export default async function Page() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect("/")
  }

  return (
    <main className="flex w-full flex-row items-start justify-start bg-purple-800  font-mono">
      <Client />
    </main>
  )
}
