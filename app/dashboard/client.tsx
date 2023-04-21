"use client"

import PromptCard from "app/components/shared/PromptCard"
import { useSession } from "next-auth/react"

export default function Client() {
  const session = useSession()
  console.log("session:", session)
  return (
    <>
      <div className="mx-auto w-[90%] dark:bg-purple-900">
        <div className="mt-32 flex max-h-screen w-full grow-0 flex-col flex-wrap items-center justify-between gap-4 sm:mt-24 sm:flex-row sm:justify-center">
          {/* <div className="items-center justify-between">
            <p className="absolute left-8 h-8 w-8 text-white">
              Welcome {session.data?.user?.name}
            </p>
          </div> */}

          <PromptCard
            size="large"
            onClick={undefined}
            title="Create React App"
            text="How to use the Create React App npm package"
          />
          <PromptCard
            size="large"
            onClick={undefined}
            title="Create React App"
            text="How to use the Create React App npm package"
          />
          <PromptCard
            title="Smart Suggestions"
            text="Catch errors and optimize your code as you go."
            imageSrc="/dashboard/smart.svg"
            onClick={undefined}
          />
          <PromptCard
            title="Bug Detection"
            text="Detect issues in your code, so you can fix them before they cause problems."
            imageSrc="/dashboard/bug.svg"
            onClick={undefined}
          />
          <PromptCard
            title="Test Generation"
            text="Generate test cases that cover  your code is thoroughly tested and reliable."
            onClick={undefined}
            imageSrc="/dashboard/test.svg"
          />
          <PromptCard
            onClick={undefined}
            title="Documentation"
            imageSrc="/dashboard/documentation.svg"
            text="Generate clear and concise documentation for your code, helping you saving you time."
          />
        </div>
      </div>
    </>
  )
}
