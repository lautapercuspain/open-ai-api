"use client"

import { LSConfig } from "@/lib/constants"
import { AnimatePresence } from "framer-motion"
import Editor from "react-simple-code-editor"
import { highlight, languages } from "prismjs/components/prism-core"
import "prismjs/components/prism-clike"
import "prismjs/components/prism-javascript"
// import "prismjs/themes/prism.css" //Example style, you can use another

import Modal from "app/components/Modal"

import ResizablePanel from "app/components/ResizablePanel"
import Button from "app/components/Button"
import GenerateCode from "app/components/GenerateCode"
import useLocalStorage from "hooks/use-localstorage"
import { ChangeEvent, useEffect, useRef, useState } from "react"
import { ElementType } from "app/components/DropDown"
import FooterSection from "./footer-section"
import { fetchWithTurbo } from "utils/generateCode"
import { getCodeGeniusPlaceHolder } from "utils/strings"

let libElements: ElementType[] = ["React", "Vue", "Angular"]
let langElements: ElementType[] = ["Typescript", "Javascript"]

export default function Client({
  lib,
  mode,
  prompt,
  setLib,
  langElement,
  codeSentence,
  testSelected,
  bugSelected,
  smartSelected,
  docSelected,
  setLangElement,
  setCodeSentence,
  improveSelected,
}) {
  const [loading, setLoading] = useState(false)
  const [modaIsOpen, setModaIsOpen] = useState(false)
  const [showSavePromptModal, setShowSavePromptModal] = useState(false)
  const [reader, setReader] =
    useState<ReadableStreamDefaultReader<Uint8Array> | null>(null)
  const [questionName, setQuestionName] = useState("")
  const [generatedCode, setGeneratedCode] = useState<String>("")
  const [userId] = useLocalStorage(LSConfig.user.userId, "")
  const controller = new AbortController()

  useEffect(() => {
    const editorPanel = document.getElementById("code-editor")
    if (editorPanel) {
      editorPanel.focus()
    }
  }, [])

  const onCodeGeneration = () => {
    generateCode()
  }

  const generateCode = async () => {
    setLoading(true)
    let response: any
    // const id = setTimeout(() => {
    //   controller.abort()
    //   setLoading(false)
    //   setModaIsOpen(true)
    //   // setCodeSentence("");
    // }, promptResponseTimeout)

    setGeneratedCode("")

    if (testSelected) {
      response = await fetchWithTurbo(
        "You are a helpful and specialized AI software assistant with much experience in unit testing, e2e testing, and all possible testing strategies.",
        prompt,
      )
    } else if (improveSelected) {
      response = await fetchWithTurbo(
        "You are a helpful and specialized AI software assistant which is specialized in code performance and customization.",
        prompt,
      )
    } else if (docSelected) {
      response = await fetchWithTurbo(
        "You are an AI software assistant which is specialized in providing code documentation. Requeriments: Use short sentences to make it easy to read (max 20 words per line).",
        prompt,
      )
    } else {
      //Smart
      response = await fetchWithTurbo(
        "You are an AI software development assistant which is specialized in providing code ideas/suggestions.",
        prompt,
      )
    }

    // console.log("response", response);
    // clear timeout
    // clearTimeout(id)

    if (response && !response.ok) {
      setLoading(false)
      return
    }

    // This data is a ReadableStream
    const data = response.body

    if (!data) {
      setLoading(false)
      return
    }

    const reader = data.getReader()
    setReader(reader)
    const decoder = new TextDecoder()
    let done = false
    try {
      while (!done) {
        const { value, done: doneReading } = await reader.read()
        done = doneReading

        let chunkValue = decoder.decode(value)
        if (
          chunkValue.match(/```/) ||
          chunkValue.match(/``/) ||
          chunkValue.match(/`/)
        )
          chunkValue = ""
        setGeneratedCode((prev) => prev + chunkValue)
      }
    } catch (error) {
      return `There was an error with your request ${error}`
    } finally {
      setLoading(false)
      setReader(null)
    }
    if (done) {
      setLoading(false)
    }
  }

  const onSaveCode = () => {
    setShowSavePromptModal(true)
  }

  const onSaveQuestionModal = () => {
    const payload = {
      userId,
      questionName,
      prompt: generatedCode,
    }
    fetch("/api/prompt/save", {
      method: "POST",
      body: JSON.stringify(payload),
    }).then((res) => console.log("res:", res))
  }

  const stopGeneration = async () => {
    setLoading(false)
    controller.abort()
    if (!reader) {
      return
    }
    try {
      await reader.cancel()
      // setReader(null);
    } catch (error: any) {
    } finally {
      setReader(null)
    }
  }
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuestionName(event.target.value)
  }

  function getCodeGeniusMode(): import("react").ReactNode {
    if (smartSelected) {
      return (
        <>
          <span>
            Write your code idea and Code Genius will give you{" "}
            <span className="text-mint">suggestions</span>
          </span>
        </>
      )
    } else if (testSelected) {
      return (
        <>
          <span>
            Paste your function and Code Genius will generate{" "}
            <span className="text-mint">unit tests</span>
          </span>
        </>
      )
    } else if (improveSelected) {
      return (
        <>
          <span>
            Paste your function and Code Genius will suggest{" "}
            <span className="text-mint">improvements</span>
          </span>
        </>
      )
    } else if (bugSelected) {
      return (
        <>
          <span>
            <strong>Mode</strong>: paste the function with the bug and Code
            Genius will try to help
          </span>
        </>
      )
    } else if (docSelected) {
      return (
        <>
          <span>
            Paste your code and Code Genius will generate{" "}
            <span className="text-mint">documentation</span> for it
          </span>
        </>
      )
    }
  }
  const placeHolderText = getCodeGeniusPlaceHolder(mode)
  return (
    <div className="relative h-screen w-full sm:ml-10">
      <Modal
        body="Our servers are taking longer than expected. We suggest
        rewording your instruction or input to get a faster result."
        isOpen={modaIsOpen}
        buttonText="Ok"
        setIsOpen={setModaIsOpen}
      />
      <Modal
        savePropmptName
        isPromptModal
        body="What should we call this question?"
        onSave={onSaveQuestionModal}
        isOpen={showSavePromptModal}
        propmptName={questionName}
        handleInputChange={handleInputChange}
        buttonText="Save"
        setIsOpen={setShowSavePromptModal}
      />
      <div
        id="container"
        className="ml-0 mt-8 flex flex-col items-start justify-start sm:ml-8 sm:justify-between"
      >
        <div className="w-full sm:mr-3">
          <div className="sm:text-1xl left-0 mx-auto mb-6 mt-8 w-full border-b-[1px] border-gray-400 px-2 py-4 pb-3 text-center font-inter text-[13px] uppercase text-purple-300 sm:mr-8 sm:mt-2 sm:ml-0 sm:pt-2 sm:text-left">
            {getCodeGeniusMode()}
          </div>
          {/* <div className="mt-1  border-b-[1px] border-purple-500 pb-2 " /> */}
          <Editor
            padding={20}
            textareaId="code-editor"
            placeholder={placeHolderText}
            className="mb-8 w-full rounded-lg border-none bg-purple-900 pb-6  pt-4 text-gray-200 focus:border-none focus:shadow-none focus:ring-0 focus:ring-purple-700 active:border-purple-700 "
            value={codeSentence}
            highlight={(code) => highlight(code, languages.js)}
            onValueChange={(code) => setCodeSentence(code)}
          />
          <ResizablePanel>
            <AnimatePresence mode="sync">
              {generatedCode && (
                <GenerateCode
                  onSaveCode={onSaveCode}
                  langElement={langElement}
                  generatedCode={generatedCode}
                />
              )}
            </AnimatePresence>
          </ResizablePanel>
        </div>
      </div>
      <FooterSection
        mode={mode}
        generatedCode={generatedCode}
        onSaveCode={onSaveCode}
        langElement={langElement}
        libElements={libElements}
        langElements={langElements}
        loading={loading}
        setLangElement={setLangElement}
        lib={lib}
        setLib={setLib}
        onCodeGeneration={onCodeGeneration}
      />
    </div>
  )
}
