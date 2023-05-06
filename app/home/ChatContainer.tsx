"use client"

// import Image from "next/image";
// import Link from "next/link";
import React, { useEffect, useRef } from "react"

export default function ChatContainer({ messages, width }: any) {
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
  ])

  return (
    <div
      ref={chatContainerRef}
      className={`mx-auto mt-8 max-h-[320px] max-w-[400px] overflow-y-scroll rounded-md 
       bg-purple-400 font-mono text-white sm:mx-auto  sm:mt-3 sm:w-[900px] sm:max-w-[900px]`}
    >
      {messages}
    </div>
  )
}
