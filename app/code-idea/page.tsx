import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation"
import { authOptions } from "pages/api/auth/[...nextauth]"
import Container from "./container"

export default async function Page() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect("/")
  }

  return (
    <main className="flex w-full flex-row items-start justify-start bg-purple-900 font-mono">
      <Container session={session} />
    </main>
  )
}
