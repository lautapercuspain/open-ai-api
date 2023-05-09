"use client"

import Image from "next/image"
// import Image from "next/image";
// import Link from "next/link";
import React, { useEffect, useRef } from "react"

export default function ChatContainer({ messages, useFullHeight }: any) {
  const chatContainerRef = useRef<HTMLDivElement>(null)
  const [scrollHeight, setScrollHeight] = React.useState(0)

  useEffect(() => {
    if (chatContainerRef && chatContainerRef.current) {
      setScrollHeight(chatContainerRef.current?.scrollHeight)
      chatContainerRef.current?.scrollTo({
        top: scrollHeight - chatContainerRef.current.offsetHeight,
        behavior: "smooth",
      })
    }
  }, [
    chatContainerRef,
    chatContainerRef.current,
    chatContainerRef.current?.scrollHeight,
    scrollHeight,
    setScrollHeight,
  ])

  return (
    <div className="mx-auto mt-4 flex max-w-md overflow-y-scroll sm:-ml-5 sm:mt-3 sm:w-[930px] sm:max-w-[930px]">
      <Image
        src={"/code-genius.svg"}
        width={32}
        height={32}
        className="mt-0"
        alt="Code Genius"
      />

      <div
        ref={chatContainerRef}
        className={`ml-2 ${
          useFullHeight ? "h-[80vh]" : "max-h-[320px]"
        } w-[89%] bg-purple-400
       font-mono text-white sm:w-[900px]`}
      >
        {messages}
      </div>
    </div>
  )
}
