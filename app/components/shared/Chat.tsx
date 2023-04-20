import "./chat.css"
import { Message } from "@chatscope/chat-ui-kit-react"

import tailwindConfig from "tailwind.config.js"
import { parseText } from "utils/parseText"
import GenerateCode from "../GenerateCode"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import ChatContainer from "app/home/ChatContainer"
import { CodeMessagesProps } from "app/home/HomeChat"
import PromptCard from "./PromptCard"

export default function Chat({
  generatedResponse,
  onArrowPress,
  codeSentence,
  setCodeSentence,
  onCodeGeneration,
}) {
  const inputRef = useRef<any>(null)
  const [prompt, setPrompt] = useState("")
  useEffect(() => {
    if (inputRef && inputRef.current) {
      inputRef.current.focus()
    }
  }, [])
  useEffect(() => {
    if (prompt !== "") {
      setCodeSentence(prompt)
    }
  }, [prompt])

  // const colors: any = tailwindConfig.theme?.extend?.colors

  const CodeMessages = () => {
    return (
      generatedResponse.length > 0 &&
      generatedResponse.map((generatedMessage) => {
        const result = parseText(generatedMessage)

        return result.length
          ? result.map((item: any) => {
              if (item.hasOwnProperty("text")) {
                return (
                  <Message
                    className="my-2 text-left leading-7"
                    model={{
                      message: item.text,
                      direction: "incoming",
                      position: "normal",
                    }}
                  />
                )
              } else {
                return (
                  <GenerateCode
                    align="start"
                    blackBackground
                    generatedCode={item.code}
                  />
                )
              }
            })
          : null
      })
    )
  }

  const LiveDemoMessages: React.FC<CodeMessagesProps> = ({
    generatedMessages,
  }) => {
    return (
      <>
        {generatedMessages.map((generatedMessage) => {
          const result = parseText(generatedMessage)
          return result.length
            ? result.map((item: any) => {
                if (item.hasOwnProperty("text")) {
                  return (
                    <p className="p2 my-2 text-left leading-7">{item.text}</p>
                  )
                } else {
                  return (
                    <GenerateCode
                      align="start"
                      blackBackground
                      generatedCode={item.code}
                    />
                  )
                }
              })
            : null
        })}
      </>
    )
  }
  console.log("generatedResponse.length::", generatedResponse.length)

  return (
    <div className="mx-auto flex w-full flex-row items-center justify-center overflow-scroll rounded-md">
      {generatedResponse.length > 0 && (
        <ChatContainer
          width="80%"
          useFullWidth
          messages={<LiveDemoMessages generatedMessages={generatedResponse} />}
        />
      )}
      {generatedResponse.length === 0 && (
        <div className="mt-24 flex max-w-[1000px] flex-wrap items-center justify-between gap-2">
          <PromptCard
            onClick={setPrompt}
            title="Create React App"
            text="How to use the Create React App npm package"
          />
          <PromptCard
            onClick={setPrompt}
            title="Create Next App"
            text="How to use the  the Create Next App package"
          />
          <PromptCard
            onClick={setPrompt}
            title="Create React App"
            text="Explain how to use Typescript with React"
          />
          <PromptCard
            onClick={setPrompt}
            title="Software Development"
            text="What are the best practice in software development"
          />
          <PromptCard
            onClick={setPrompt}
            title="Database"
            text="What's the best Database with Typescript support"
          />
          <PromptCard
            onClick={setPrompt}
            title="Testing"
            text="Explain how to use Jest with React Testing Library"
          />
        </div>
      )}

      {/* Chat input container */}
      <div className="fixed bottom-4 left-0 right-0 mx-auto w-full ">
        <div className="relative mx-auto mt-2 h-12 sm:w-[990px]">
          <input
            ref={inputRef}
            className="font-lg h-12 resize-none rounded-lg bg-purple-400 py-2.5 pl-2  
             font-mono text-white outline-0 placeholder:pt-1 placeholder:pl-3 placeholder:font-popins placeholder:text-[16px] placeholder:text-white hover:outline-0 focus:border-transparent focus:ring-black/30 active:outline-0 sm:w-[990px]"
            value={prompt.length > 0 ? prompt : codeSentence}
            onChange={(e) => setCodeSentence(e.target.value)}
            onKeyDown={(e) => onCodeGeneration(e)}
            placeholder={"Ask to Code Genius?"}
          />
          <button className="absolute right-2 top-2 rounded-lg bg-gray-900  disabled:hover:bg-transparent ">
            <Image
              className="mb-1 mr-2 pt-2 pb-1 pl-2 text-white"
              alt="Send"
              width={24}
              height={24}
              src="/home/send.svg"
              onClick={() => onArrowPress()}
            />
          </button>
        </div>
      </div>
    </div>
  )
}
