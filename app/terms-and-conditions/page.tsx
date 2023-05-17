import Footer from "app/components/Footer"
import Client from "./client"

export const metadata = {
  title: "Create Genius | Terms and Conditions",
}

export default function Page() {
  return (
    <div className="flex min-h-screen flex-nowrap">
      <div className="mx-auto max-w-max pb-10">
        <Client />
        <Footer session={null} />
      </div>
    </div>
  )
}
