import GenerateCode from "../GenerateCode"
import React, { useEffect, useRef } from "react"
import Image from "next/image"
import Markdown from "react-markdown"
import { parseText, parseTextHome } from "utils/parseText"
import { Message } from "ai/react/dist"

const LogoCodeGenius = React.memo(() => (
  <Image
    src={"/logo/code-genius.svg"}
    width={32}
    height={32}
    alt="Code Genius"
  />
))

const UserAvatar = ({ username }) => {
  return (
    <div className="flex items-center justify-center">
      <span className="mx-auto flex h-9 w-9 items-center justify-center rounded-full border-[1px] border-purple-500 bg-morado p-1 text-center font-medium ">
        {username}
      </span>
    </div>
  )
}

export const CombinedMessages = React.memo(
  ({
    userName,
    isLegacy,
    generatedMessages,
    fontColor,
  }: {
    isLegacy?: boolean
    userName?: string
    generatedMessages: Message[]
    fontColor?: string
  }) => {
    const listRef = useRef<HTMLDivElement>(null)
    useEffect(() => {
      //3️⃣ bring the last item into view
      listRef.current?.lastElementChild?.scrollIntoView({
        block: "end",
      })
    }, [generatedMessages])
    return (
      <div className="overflow-y-scrol" ref={listRef}>
        {generatedMessages.map((generatedMessage: any) => {
          const result = isLegacy
            ? parseTextHome(generatedMessage)
            : parseText({
                message: generatedMessage,
              })
          const role = !isLegacy ? generatedMessage?.role : "system"

          return result.length
            ? result.map((message: any, idx) => {
                if (message.hasOwnProperty("text") && message?.text !== "") {
                  return (
                    <div key={idx} className="my-8 flex  ">
                      <div className="mt-2 flex items-start justify-start sm:ml-6">
                        {role === "user" ? (
                          <UserAvatar username={userName?.substring(0, 1)} />
                        ) : (
                          <LogoCodeGenius />
                        )}
                      </div>
                      <div
                        className={`mx-auto ml-3 w-[92%] rounded-lg border border-gray-500 bg-purple-800 p-2`}
                      >
                        <p
                          style={{ borderRadius: "0px" }}
                          className={`ml-2 text-left leading-7 ${
                            fontColor ? fontColor : "text-gray-200"
                          }`}
                        >
                          <Markdown>{message.text}</Markdown>
                        </p>
                      </div>
                    </div>
                  )
                } else {
                  return (
                    <GenerateCode
                      key={idx}
                      borderRadius="none"
                      align="end"
                      generatedCode={message.code}
                    />
                  )
                }
              })
            : null
        })}
      </div>
    )
  },
)
