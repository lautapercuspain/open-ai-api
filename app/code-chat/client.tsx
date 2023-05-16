"use client"

import Modal from "app/components/Modal"
import { ChangeEvent, KeyboardEvent, useState, useRef, useEffect } from "react"
import Chat from "app/components/shared/Chat"
import Header from "app/components/Header"
import { useSignInModal } from "app/components/modals/SignInModal"
import { generateCode } from "utils/generateCode"
import InputChat from "app/components/shared/InputChat"

export default function Client({ session }) {
  const [loading, setLoading] = useState(false)
  const [modaIsOpen, setModaIsOpen] = useState(false)
  const [creditsModaIsOpen, setCreditsModaIsOpen] = useState(false)
  const { setShowSignInModal } = useSignInModal({})
  const [reader, setReader] =
    useState<ReadableStreamDefaultReader<Uint8Array> | null>(null)
  const [codeSentence, setCodeSentence] = useState("")
  const [generatedCode, setGeneratedCode] = useState<string>("")
  const [showSavePromptModal, setShowSavePromptModal] = useState(false)
  const [questionName, setQuestionName] = useState("")
  const userId = session && session.user?.id
  const userCredits = session && session.user?.credits
  const controller = new AbortController()
  const inputRef = useRef<any>(null)
  useEffect(() => {
    if (inputRef && inputRef.current) {
      inputRef.current.focus()
    }
  }, [])
  useEffect(() => {
    if (!userCredits || userCredits === 0) {
      setCreditsModaIsOpen(true)
    }
  }, [userCredits])

  const codeMessages = useRef([
    {
      role: "system",
      content:
        "You are a robust and cleaver programming software assistant specializing in Javascript and Typescript. But your knowledge extends to a wide variety of programming skills. Follow user instructions to the letter.",
    },
  ])

  const onArrowPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (!userCredits || userCredits === 0) {
      setCreditsModaIsOpen(true)
      return false
    }
    codeMessages.current = [
      ...codeMessages.current,
      {
        role: "user",
        content: codeSentence,
      },
    ]
    setCodeSentence("")
    generateCode(setLoading, setReader, setGeneratedCode, codeMessages, userId)
  }

  const onCodeGeneration = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (!userCredits || userCredits === 0) {
      setCreditsModaIsOpen(true)
      return false
    }

    if (codeSentence.length === 0 || codeSentence === "") {
      return false
    }
    if (e.key === "Enter") {
      codeMessages.current = [
        ...codeMessages.current,
        {
          role: "user",
          content: codeSentence,
        },
      ]
      setCodeSentence("")
      //Generate Code funciton
      generateCode(
        setLoading,
        setReader,
        setGeneratedCode,
        codeMessages,
        userId,
      )
    }
  }

  // const onSaveCode = () => {
  //   setShowSavePromptModal(true)
  // }

  // const onSaveQuestionModal = () => {
  //   const payload = {
  //     userId,
  //     questionName,
  //     prompt: generatedCode,
  //   }
  //   fetch("/api/prompt/save", {
  //     method: "POST",
  //     body: JSON.stringify(payload),
  //   }).then((res) => console.log("res:", res))
  // }

  // const stopGeneration = async () => {
  //   setLoading(false)
  //   controller.abort()
  //   if (!reader) {
  //     return
  //   }
  //   try {
  //     await reader.cancel()
  //   } catch (error: any) {
  //   } finally {
  //     setReader(null)
  //   }
  // }

  const generatedMessages = generatedCode.split("<>").filter((i) => i !== "")

  return (
    <>
      <Header session={session} setShowSignInModal={setShowSignInModal} />
      <Chat
        generatedResponse={generatedMessages}
        setCodeSentence={setCodeSentence}
      />

      {/* Chat input container */}
      <InputChat
        inputRef={inputRef}
        codeSentence={codeSentence}
        setCodeSentence={setCodeSentence}
        onCodeGeneration={onCodeGeneration}
        onArrowPress={onArrowPress}
      />
      <Modal
        body="You don't have more Code Genius credits. Please upgrade your account before continuing"
        isOpen={creditsModaIsOpen}
        buttonText="Ok"
        buttonLink="/dashboard"
        setIsOpen={setCreditsModaIsOpen}
      />
      {/* <Modal
        body="Our servers are taking longer than expected. We suggest
        rewording your instruction or input to get a faster result."
        isOpen={modaIsOpen}
        buttonText="Ok"
        setIsOpen={setModaIsOpen}
      />
      <Modal
        body="What should we call this question?"
        onSave={onSaveQuestionModal}
        isOpen={showSavePromptModal}
        propmptName={questionName}
        handleInputChange={handleInputChange}
        savePropmptName
        buttonText="Save"
        setIsOpen={setShowSavePromptModal}
      /> */}
    </>
  )
}
