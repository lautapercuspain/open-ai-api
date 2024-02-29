"use client"

import useWindowSize from "hooks/use-window-size"
import React from "react"
import { CopyBlock, dracula } from "react-code-blocks"
import tailwindConfig from "tailwind.config.js"

type GenerateCode = {
  generatedCode: String
  langElement?: string
  isCodeIdea?: boolean
  backgroundColor?: string
  align?: string
  width?: string
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
  const { isMobile } = useWindowSize()
  const minWidth = isMobile ? "90vw" : "100%"

  return (
    <>
      <div className={`my-5 flex flex-col sm:ml-16`}>
        {generatedCode &&
          generatedCode
            .replace("typescript", "")
            .replace("javascript", "")
            .replace("python", "")
            .replace("go", "")
            .replace("python", "")
            .replace("html", "")
            .replace("sql", "")
            .replace("jsx", "")
            .replace("tsx", "")
            .split("**::")
            .map((generated, idx) => {
              return (
                <div
                  key={idx}
                  className="mx-auto flex w-full justify-start text-left font-mono sm:w-full sm:items-end sm:justify-end"
                >
                  <CopyBlock
                    onCopy={() => null}
                    copied={false}
                    showLineNumbers
                    wrapLongLines
                    customStyle={{
                      minWidth,
                      borderRadius: "0.6rem",
                      border: `0.5px solid ${themeColors.gray[500]}`,
                    }}
                    text={generated.trim()}
                    language={langElement === "Typescript" ? "tsx" : "jsx"}
                    codeBlock
                    theme={{
                      ...dracula,
                      mode: "dark",
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
