"use client"

import PromptCard from "app/components/shared/PromptCard"
import useWindowSize from "hooks/use-window-size"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"

export default function Client() {
  const session = useSession()

  const UpgradeAccount = () => (
    <div
      className={`my-auto mx-2 mt-2 flex cursor-pointer flex-row 
      rounded-lg bg-gradient-to-r from-[#A1FFE0] to-[#2C9DC0] p-[2px] font-mono
    sm:items-start sm:justify-center`}
    >
      <div className="relative h-[48px] w-auto rounded-lg bg-purple-500">
        <div className="text-sm px-3 py-3 text-center font-bold text-white sm:mx-auto sm:px-6">
          Upgrade Account
        </div>
      </div>
    </div>
  )

  const { isMobile } = useWindowSize()
  const cardWidth = isMobile ? "w-[100%]" : "w-[47%]"
  const router = useRouter()
  return (
    <>
      <div className="mx-auto h-full w-[95%] dark:bg-purple-900 sm:ml-16">
        <div className="flex flex-row">
          <span className="text-md al absolute top-20 mb-10 ml-2 font-bold text-white sm:ml-10 sm:text-2xl">
            Welcome, {session.data?.user?.name}!
          </span>
        </div>
        <div className="mt-32 flex w-full grow-0 flex-col items-center justify-between gap-4 pt-8 sm:mt-24 sm:flex-row sm:flex-wrap sm:justify-center">
          <PromptCard
            size="large"
            width={cardWidth}
            order="order-2 sm:order-1"
            imageSrc="/dashboard/credits.svg"
            onClick={undefined}
            title={"30"}
            text="Credits Available"
          />
          <PromptCard
            size="large"
            order="order-1 sm:order-2"
            width={cardWidth}
            button={<UpgradeAccount />}
            title="Free"
            text="Subscription Plan"
            imageSrc="/dashboard/code-box.svg"
            onClick={undefined}
          />

          <PromptCard
            onClick={() => {
              router.push("/code-idea?mode=smart")
            }}
            order="order-3"
            title="Smart Suggestions"
            text="Catch errors and optimize your code as you go."
            imageSrc="/dashboard/smart.svg"
          />
          <PromptCard
            onClick={() => {
              router.push("/code-idea?mode=imrove")
            }}
            title="Code Improvement"
            order="order-6"
            text="Improve your code, find alternative ways to make your code more efficient."
            imageSrc="/dashboard/bug.svg"
          />
          <PromptCard
            onClick={() => {
              router.push("/code-idea?mode=test")
            }}
            order="order-4"
            title="Test Generation"
            text="Generate test cases that cover  your code is thoroughly tested and reliable."
            imageSrc="/dashboard/test.svg"
          />
          <PromptCard
            onClick={() => {
              router.push("/code-idea?mode=docs")
            }}
            order="order-5"
            title="Documentation"
            imageSrc="/dashboard/documentation.svg"
            text="Generate clear and concise documentation for your code, helping you saving you time."
          />
        </div>
      </div>
    </>
  )
}
