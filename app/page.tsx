import Hero from "./home/Hero"
import Feature from "./home/Feature"
// import Subscription from "./home/Subscription"
import SuperHero from "./home/SuperHero"
import HomeChat from "./home/HomeChat"
import Footer from "./components/Footer"
import { getServerSession } from "next-auth"
import { authOptions } from "pages/api/auth/[...nextauth]"

export const metadata = {
  title: "Create Genius Code",
  description:
    "A tool that will help you find quick and more innovative solutions using AI and specifically trained models to make the developer's life easier.",
}
export default async function Page() {
  const session = await getServerSession(authOptions)
  return (
    <main className={`mx-auto max-w-max pb-10`}>
      <SuperHero />
      <HomeChat />
      <Feature />
      <Footer session={session} />
    </main>
  )
}

{
  /* <Subscription /> */
}
