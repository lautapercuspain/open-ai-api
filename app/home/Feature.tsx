"use client"

import { useMotionValueEvent, useScroll } from "framer-motion"
import suggestions from "../../animations/suggestions.json"
import generation from "../../animations/generation.json"
import bugDetection from "../../animations/bugDetection.json"
import { motion } from "framer-motion"

import Lottie from "lottie-react"
import { useState } from "react"
import ShowCaseCard from "./ShowCaseCard"
import Image from "next/image"
import Button from "app/components/Button"

const interactivity: any = {
  mode: "scroll",
  actions: [
    {
      visibility: [0, 0.2],
      type: "stop",
      frames: [0],
    },
    {
      visibility: [0.2, 0.5],
      type: "seek",
      frames: [0, 135],
    },
    {
      visibility: [0.5, 0.9],
      type: "stop",
      frames: [150],
    },
  ],
}
export const AISuggestions = () => {
  return (
    <>
      <Lottie interactivity={interactivity} animationData={suggestions} />
    </>
  )
}
const AIGeneration = () => {
  return <Lottie interactivity={interactivity} animationData={generation} />
}
const BugDetection = () => {
  return <Lottie interactivity={interactivity} animationData={bugDetection} />
}

export default function Feature({ setShowSignInModal }) {
  const [verticalScroll, setVerticalScroll] = useState(0)
  const { scrollYProgress, scrollY, scrollX } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setVerticalScroll(latest)
  })

  const AIShowCaseImage = (
    <Image
      className="my-auto"
      src="/home/AIGeneration.svg"
      alt="AI Generation"
      width={400}
      height={170}
    />
  )

  const CreateAccountButton = (
    <Button
      buttonTextColor="dark"
      variant="mint"
      loading={false}
      text="Sign Up"
      onClick={() => {
        setShowSignInModal(true)
      }}
    />
  )

  return (
    <>
      <section className={`mt-8 font-sans text-white`}>
        <ShowCaseCard
          title="The AI programming assistant that helps you coding faster, easier,
            and more efficient!"
          description="Writing great code can be a challenging and time-consuming task, but
            with Code Genius you can take your skills to the next level! Explore
            the possibilities!"
          image={AIShowCaseImage}
        />

        <div className="mb-24 grid grid-cols-1 gap-1 sm:grid-cols-2">
          <div className="mx-auto mb-2 flex w-96 items-start justify-start sm:ml-40 sm:w-full">
            <BugDetection />
          </div>
          <div className="mt-0 p-2 sm:mt-20">
            <motion.h1
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="pl-3 text-center text-5xl font-bold sm:text-left"
            >
              Smart suggestions
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-2 w-full p-4 text-center sm:w-[80%] sm:text-left"
            >
              Our software offers smart generation capabilities, allowing
              developers to generate high-quality code with ease. With this
              feature, developers can save time and effort in writing code,
              resulting in increased productivity and faster development cycles.
            </motion.p>
          </div>
          <div className="mx-auto mb-2 flex w-96 items-start justify-start sm:ml-40 sm:w-full">
            <BugDetection />
          </div>
          <div className="mt-0 p-2 sm:mt-20">
            <motion.h1
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="pl-3 text-center text-5xl font-bold sm:text-left"
            >
              Test Generation
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-2 w-full p-4 text-center sm:w-[80%] sm:text-left"
            >
              You can generate tests based on the provided function. With this
              feature, developers can quickly and easily generate test cases for
              their functions, ensuring that their code is thoroughly tested and
              reliable. This feature can save developers a significant amount of
              time and effort in manually creating test cases.
            </motion.p>
          </div>
          <div className="mx-auto flex w-96 items-center justify-start sm:ml-40 sm:w-full">
            <BugDetection />
          </div>
          <div className="mt-0 p-2 sm:mt-20">
            <motion.h1
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="pl-3 text-center text-5xl font-bold sm:text-left"
            >
              Code Ideas
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-2 w-full p-4 text-center sm:w-[80%] sm:text-left"
            >
              Our software includes a feature that provides developers with code
              ideas based on the context of their current project. This feature
              can be especially useful for new developers who may not be as
              familiar with the language or libraries they are working with.
              With this feature, developers can save time in researching and
              experimenting with new code solutions, resulting in faster
              development cycles and increased productivity.
            </motion.p>
          </div>
        </div>
        <div className="my-20">
          <ShowCaseCard
            title="Now you can Chat
            with Code Genius and ask
            anything you want!"
            description="Writing great code can be a challenging and time-consuming task, but with Code Genius you can take your skills to the next level! Explore the possibilities!"
            image={AIShowCaseImage}
            button={CreateAccountButton}
          />
        </div>
      </section>
    </>
  )
}

{
  /* <motion.div
            whileHover={{ scale: 1.5 }}
            transition={{ type: "spring", velocity: 1 }}
            animate={{
              x:
                verticalScroll < 500
                  ? 320
                  : verticalScroll >= 500 && verticalScroll < 1200
                  ? verticalScroll - window.screen.height
                  : verticalScroll - window.screen.height,
            }}
            className={`-ml-50 fixed top-[500px] z-0 mx-auto hidden ${
              verticalScroll > 0 ? "sm:block" : "hidden"
            }  } brightness-25 h-[550px] w-[1250px] bg-gradient-radial from-gradient-dark/40 via-transparent
            to-transparent `}
          ></motion.div> */
}
