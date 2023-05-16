import "./chat.css"

import { parseText } from "utils/parseText"
import GenerateCode from "../GenerateCode"
import { useEffect, useState } from "react"
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
  const [prompt, setPrompt] = useState("")

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
        {generatedMessages.map((generatedMessage, idx) => {
          console.log("generatedMessage:", generatedMessage)

          const result = parseText(generatedMessage)

          return (
            result.length &&
            result.map((item: any) => {
              if (item.hasOwnProperty("code")) {
                return (
                  <GenerateCode
                    align="start"
                    key={idx}
                    generatedCode={item.code}
                  />
                )
              }

              if (item.hasOwnProperty("text")) {
                return (
                  <p
                    key={idx}
                    className="rounded-lg bg-purple-400 p-2 text-left leading-7"
                  >
                    {item.text}
                  </p>
                )
              }
            })
          )
        })}
      </>
    )
  }

  return (
    <div className="flex items-center justify-center overflow-scroll rounded-md sm:mx-auto sm:flex-row">
      {generatedResponse.length > 0 && (
        <ChatContainer
          useFullHeight
          useFullWidth
          messages={<LiveDemoMessages generatedMessages={generatedResponse} />}
        />
      )}
      {generatedResponse.length === 0 && (
        <div className="mx-auto flex max-h-[75vh] w-full flex-col items-center justify-center sm:mt-10 sm:max-w-[1000px] sm:flex-row sm:flex-wrap sm:justify-between sm:gap-1">
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
    </div>
  )
}
