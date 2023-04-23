"use client"

import { useEffect, useState } from "react"
import Client from "./client"
import Navigation from "./navigation"
import { ElementType } from "app/components/DropDown"
import { useSearchParams } from "next/navigation"

export default function Container() {
  const [smartSelected, setSmartSelected] = useState(true)
  const [openSecondayNavBar, setOpenSecondayNavBar] = useState(false)
  const [testSelected, setTestSelected] = useState(false)
  const [improveSelected, setImproveSelected] = useState(false)
  const [bugSelected, setBugSelected] = useState(false)
  const [docSelected, setDocSelected] = useState(false)
  const [prompt, setPrompt] = useState("")
  const [codeSentence, setCodeSentence] = useState("")
  const [langElement, setLangElement] = useState<ElementType>("Typescript")
  const [lib, setLib] = useState<ElementType>("React")
  const searchParams = useSearchParams()

  useEffect(() => {
    if (searchParams) {
      const search = searchParams.get("mode")
      console.log("search:", search)
      if (smartSelected || search === "smart") {
        setPrompt(`Generate code written in ${langElement} and ${lib}, clearly labeled "**::", "// 1.", "// 2.", "// 3." and "// 4.". 
              Context: ${codeSentence}${
          codeSentence.slice(-1) === "." ? "" : "."
        } Requirements: Make sure to comment on the folder and file structure at the end and to export default the Application component in the last step.`)
      }
      if (testSelected || search === "test") {
        setPrompt(
          `Write tests for the following function: "${codeSentence}". Make sure to only output code without any additional explanation.`,
        )
      }
      if (bugSelected) {
        setPrompt(
          `Improve and propose performance boost based on the provided code: \`${codeSentence}\`. Make sure to comment on the improvements at the end, in short code comments.`,
        )
      }
      if (improveSelected || search === "improve") {
        setPrompt(
          `Improve and propose performance boost based on the provided code: \`${codeSentence}\`. Make sure to comment on the improvements at the end, in short code comments.`,
        )
      }
      if (docSelected || search === "docs") {
        setPrompt(
          `Create documentation for the provided code: "${codeSentence}". Document the code as code comments. Don't use long sentences`,
        )
      }
    }
  }, [
    searchParams,
    smartSelected,
    testSelected,
    bugSelected,
    docSelected,
    codeSentence,
    improveSelected,
  ])

  return (
    <>
      <Navigation
        setOpenSecondayNavBar={setOpenSecondayNavBar}
        openSecondayNavBar={openSecondayNavBar}
        improveSelected={improveSelected}
        setImproveSelected={setImproveSelected}
        smartSelected={smartSelected}
        testSelected={testSelected}
        bugSelected={bugSelected}
        docSelected={docSelected}
        setDocSelected={setDocSelected}
        setSmartSelected={setSmartSelected}
        setTestSelected={setTestSelected}
        setBugSelected={setBugSelected}
      />
      <Client
        setLib={setLib}
        lib={lib}
        setLangElement={setLangElement}
        langElement={langElement}
        bugSelected={bugSelected}
        improveSelected={improveSelected}
        docSelected={docSelected}
        smartSelected={smartSelected}
        testSelected={testSelected}
        prompt={prompt}
        codeSentence={codeSentence}
        setCodeSentence={setCodeSentence}
      />
    </>
  )
}
