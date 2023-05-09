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
                    <p className="rounded-lg bg-purple-400 p-2 text-left  leading-7">
                      {item.text}
                    </p>
                  )
                } else {
                  return (
                    <GenerateCode align="start" generatedCode={item.code} />
                  )
                }
              })
            : null
        })}
      </>
    )
  }

  return (
    <div className="flex items-center justify-center overflow-scroll rounded-md pl-5 sm:mx-auto sm:flex-row">
      {generatedResponse.length > 0 && (
        <ChatContainer
          useFullHeight
          useFullWidth
          messages={<LiveDemoMessages generatedMessages={generatedResponse} />}
        />
      )}
      {generatedResponse.length === 0 && (
        <div className="flex max-h-[650px] max-w-[1000px] flex-col items-start justify-center sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-1">
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
            title="Typescript"
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
      <div className="fixed bottom-4 left-0 right-0 z-20 mx-auto h-14 w-full bg-transparent">
        <div className="relative mx-auto mt-2 h-12 w-full sm:w-[990px]">
          <input
            ref={inputRef}
            className="font-lg mx-2 h-12 w-[90%] resize-none rounded-lg bg-purple-400 py-2.5 pr-4 pl-2.5  
              font-mono text-white outline-0 placeholder:pt-1 placeholder:pl-3 placeholder:font-sans placeholder:text-[16px]
               placeholder:text-white hover:outline-0 focus:border-transparent focus:ring-black/30 active:outline-0 
               sm:w-[990px]"
            value={codeSentence}
            onChange={(e) => setCodeSentence(e.target.value)}
            onKeyDown={(e) => onCodeGeneration(e)}
            placeholder={"Ask to Code Genius?"}
          />
          <button className="absolute right-8 top-2 rounded-lg bg-gray-900 disabled:hover:bg-transparent  sm:right-1 ">
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
