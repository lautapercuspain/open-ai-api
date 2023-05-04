"use client"

import Modal from "app/components/Modal"
import useLocalStorage from "hooks/use-localstorage"
import { ChangeEvent, KeyboardEvent, useState, useRef, useEffect } from "react"
import { LSConfig } from "@/lib/constants"
import Chat from "app/components/shared/Chat"
import GenerateCode from "app/components/GenerateCode"
import { updateApiCallsAndCredits } from "utils/helpers"

export default function Client({ session }) {
  const [loading, setLoading] = useState(false)
  const [modaIsOpen, setModaIsOpen] = useState(false)
  const [creditsModaIsOpen, setCreditsModaIsOpen] = useState(false)
  const [reader, setReader] =
    useState<ReadableStreamDefaultReader<Uint8Array> | null>(null)
  const [codeSentence, setCodeSentence] = useState("")
  const [generatedCode, setGeneratedCode] = useState<string>("")
  const [showSavePromptModal, setShowSavePromptModal] = useState(false)
  const [questionName, setQuestionName] = useState("")
  const userId = session && session.user?.id
  const userCredits = session && session.user?.credits
  const controller = new AbortController()

  console.log("session", session)
  console.log("userCredits", userCredits)

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
    generateCode()
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
      generateCode()
    }
  }

  const generateCode = async () => {
    setLoading(true)

    const response = await fetch("/api/generateWithTurbo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messages: [...codeMessages.current],
      }),
    })

    // console.log("response", response);
    // clear timeout
    // clearTimeout(id)

    if (!response.ok) {
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
    let tokensCount = 0
    try {
      while (!done) {
        const { value, done: doneReading } = await reader.read()
        done = doneReading
        tokensCount++
        let chunkValue = decoder.decode(value)
        // console.log("chunkValue: ", chunkValue)

        setGeneratedCode((prev) => prev + chunkValue)
        if (done) {
          setGeneratedCode((prev) => prev + "<>")
          setLoading(false)
        }
      }
    } catch (error) {
      return `There was an error with your request ${error}`
    } finally {
      setLoading(false)
      setReader(null)
      //✨ Make some credits update Magic ✨
      const data = await updateApiCallsAndCredits(userId, tokensCount)

      if (data?.creditsLeft === 0) {
        alert("You have no more credits left. Please purchase more credits.")
      }

      //RESET TOKENS COUNT.
      tokensCount = 0
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
    } catch (error: any) {
    } finally {
      setReader(null)
    }
  }

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuestionName(event.target.value)
  }
  const generatedMessages = generatedCode.split("<>").filter((i) => i !== "")

  return (
    <>
      <Modal
        body="You don't have more Code Genius credits. Please upgrade your account before continuing"
        isOpen={creditsModaIsOpen}
        buttonText="Ok"
        buttonLink="/dashboard"
        setIsOpen={setCreditsModaIsOpen}
      />
      <Modal
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
      />
      <Chat
        generatedResponse={generatedMessages}
        onArrowPress={onArrowPress}
        codeSentence={codeSentence}
        onCodeGeneration={onCodeGeneration}
        setCodeSentence={setCodeSentence}
      />
    </>
  )
}
