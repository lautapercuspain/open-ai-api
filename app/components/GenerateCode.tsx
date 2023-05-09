"use client"

import { useEffect, useRef, useState } from "react"
import { CopyBlock, dracula } from "react-code-blocks"
import tailwindConfig from "tailwind.config.js"
import Button from "./Button"

type GenerateCode = {
  generatedCode: String
  langElement?: string
  blackBackground?: boolean
  align?: string
  borderRadius?: string
  onSaveCode?: () => void
}

const colors: any = tailwindConfig.theme?.extend?.colors

export default function GenerateCode({
  align = "center",
  borderRadius = "0.625rem",
  blackBackground = false,
  onSaveCode,
  generatedCode,
  langElement,
}: GenerateCode) {
  const [scrollHeight, setScrollHeight] = useState(0)
  const chatContainerRef = useRef<HTMLDivElement>(null)

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
    <>
      <div
        className={`my-5 flex flex-col items-${align} md:items-${align} lg:items-${align}`}
      >
        {generatedCode
          .substring(generatedCode.indexOf("**") + 0)
          .replace("**", "")
          .replace("tsx", "")
          .replace("", "")
          .split("**::")

          .map((generated) => {
            return (
              <div
                ref={chatContainerRef}
                className="max-h-[700px] w-full overflow-x-auto overflow-y-scroll text-left"
              >
                <CopyBlock
                  showLineNumbers
                  wrapLongLines
                  customStyle={{ borderRadius }}
                  text={generated}
                  language={langElement === "Typescript" ? "tsx" : "jsx"}
                  codeBlock
                  theme={{
                    ...dracula,
                    lineNumberColor: colors.lineNumbers,
                    backgroundColor: blackBackground ? "#000000" : "#101018",
                    metaColor: colors.mint,
                  }}
                />
              </div>
            )
          })}
      </div>
    </>
  )
}
