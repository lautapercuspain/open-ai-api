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

let libElements: ElementType[] = ["React", "Vue", "Angular"]
let langElements: ElementType[] = ["Typescript", "Javascript"]

export default function Client({
  lib,
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
      response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt,
        }),
      })
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
            Write your code idea and Code Genius will generate the code
          </span>
        </>
      )
    } else if (testSelected) {
      return (
        <>
          <span>
            Paste your function and Code Genius will generate the unit tests
          </span>
        </>
      )
    } else if (improveSelected) {
      return (
        <>
          <span>
            Paste your function and Code Genius will generate the code
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
            Paste your code and Code Genius will generate documentation for it
          </span>
        </>
      )
    }
  }

  return (
    <div className="relative ml-10 h-screen w-full">
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
      <div id="container" className="ml-8 mt-8 flex flex-col justify-between">
        <div className="mr-3">
          <div className="text-1xl left-2 ml-2 mb-6  pt-2 text-center uppercase text-purple-300 sm:text-left">
            {getCodeGeniusMode()}
          </div>

          <Editor
            textareaId="code-editor"
            className="mb-20 w-full rounded-lg border-none bg-purple-900 pb-6 pt-4 text-gray-200 focus:border-none focus:shadow-none  focus:ring-0 focus:ring-purple-700 active:border-purple-700 sm:min-h-[500px]"
            value={codeSentence}
            padding={10}
            highlight={(code) => highlight(code, languages.js)}
            onValueChange={(code) => setCodeSentence(code)}
          />

          <div className="my-4 mx-4 flex h-auto items-center justify-between sm:hidden">
            <Button
              hidden={false}
              onClick={onSaveCode}
              variant="mint"
              loading={false}
              text="Save Code"
            />
            <Button
              onClick={onCodeGeneration}
              loading={loading}
              variant="mint"
              text="Generate"
            />
          </div>
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
