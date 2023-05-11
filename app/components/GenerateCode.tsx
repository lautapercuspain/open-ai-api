"use client"

import React, { useEffect, useRef, useState } from "react"
import { CopyBlock, dracula } from "react-code-blocks"
import tailwindConfig from "tailwind.config.js"

type GenerateCode = {
  generatedCode: String
  langElement?: string
  backgroundColor?: string
  align?: string
  themeColors?: any
  borderRadius?: string
  onSaveCode?: () => void
}

const themeColors: any = tailwindConfig.theme?.extend?.colors

function GenerateCode({
  align = "center",
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
          .replace("javascript", "")
          .replace("```", "")
          .replace("js", "")
          .replace("jsx", "")
          .replace("x", "")
          .replace("java", "")
          .replace("type", "")
          .replace("vue", "")
          .replace("script", "")
          .replace("typescript", "")
          .replace("html", "")
          .split("**::")

          .map((generated) => {
            return (
              <div
                ref={chatContainerRef}
                className="max-h-[50vh] overflow-x-auto overflow-y-scroll text-left font-mono sm:min-w-[100%] sm:max-w-[100%]"
              >
                <CopyBlock
                  showLineNumbers
                  wrapLongLines
                  customStyle={{
                    borderRadius: "0.6rem",
                    border: `0.5px solid ${themeColors.purple[500]}`,
                  }}
                  text={generated.trim()}
                  language={langElement === "Typescript" ? "tsx" : "jsx"}
                  codeBlock
                  theme={{
                    ...dracula,
                    textColor: "#ffffff",
                    stringColor: themeColors.purple[300],
                    attributeColor: themeColors.purple[300],
                    functionColor: themeColors.mint,
                    templateTagColor: themeColors.moradoCode, //H1 or HTML Tags
                    backgroundColor: themeColors.purple[900],
                    keywordColor: themeColors.moradoCode,
                    metaKeywordColor: "#8283ad",
                    lineNumberColor: themeColors.lineNumbers,
                    metaColor: themeColors.mint,
                  }}
                />
              </div>
            )
          })}
      </div>
    </>
  )
}

export default React.memo(GenerateCode)
