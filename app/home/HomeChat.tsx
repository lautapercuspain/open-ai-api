"use client"

import React from "react"

import { AI_MOOD } from "@/lib/constants"
import { useChat } from "ai/react"

import HomeChatInput from "./HomeChatInput"

import { useRouter } from "next/navigation"

export default function HomeChat() {
  const router = useRouter()

  const { input: inputValue, handleInputChange } = useChat({
    initialMessages: [{ id: "1", role: "system", content: AI_MOOD.engineer }],
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    if (inputValue !== "") {
      router.push(`/code-chat?q=${inputValue}`)
    }
  }

  return (
    <>
      <div className="relative ml-1 flex w-full flex-col items-center justify-center font-sans sm:mx-auto sm:w-full">
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="relative mt-2 h-12 w-full text-center sm:w-[900px]"
        >
          <HomeChatInput
            inputValue={inputValue}
            handleInputChange={handleInputChange}
          />
        </form>
      </div>
    </>
  )
}
