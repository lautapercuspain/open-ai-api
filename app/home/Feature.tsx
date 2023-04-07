"use client"

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion"
import suggestions from "../../animations/suggestions.json"
import generation from "../../animations/generation.json"
import bugDetection from "../../animations/bugDetection.json"
import { Poppins } from "next/font/google"

import Lottie from "lottie-react"
import { useState } from "react"

const popins = Poppins({
  variable: "--font-popins",
  weight: ["100", "300", "600"],
})

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
const AISuggestions = () => {
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

export default function Feature() {
  const [verticalScroll, setVerticalScroll] = useState(0)
  const [horizontallScroll, setHorizontalScroll] = useState(0)
  const { scrollYProgress, scrollY, scrollX } = useScroll()

  // const scaleX = useSpring(scrollYProgress, {
  //   stiffness: 100,
  //   damping: 30,
  //   restDelta: 0.001,
  // })
  useMotionValueEvent(scrollY, "change", (latest) => {
    console.log("Page Y scroll: ", latest)
    setVerticalScroll(latest)
  })
  const x = useMotionValue(0)
  const input = [-200, 0, 200]
  const output = [0, 1, 0]
  const opacity = useTransform(x, input, output)
  return (
    <>
      <section className={`mt-8 text-white ${popins.variable} font-popins`}>
        <div className="grid grid-cols-1 gap-1 sm:grid-cols-2">
          <motion.div
            whileHover={{ scale: 1.5 }}
            transition={{ type: "spring", velocity: 1 }}
            animate={{
              x:
                verticalScroll < 500
                  ? 350
                  : verticalScroll >= 500 && verticalScroll < 1200
                  ? verticalScroll - window.screen.height
                  : verticalScroll - window.screen.height,
            }}
            className={`fixed top-[500px] mx-auto -ml-[50px] hidden ${
              verticalScroll > 0 ? "sm:block" : "hidden"
            }  h-[550px] w-[850px] bg-gradient-radial from-gradient-dark/80 via-transparent to-transparent brightness-${
              verticalScroll > 600 ? "25" : "50"
            } `}
          ></motion.div>
          <div className="mx-auto mb-24 flex w-96 items-start justify-start sm:ml-40 sm:w-full">
            <AISuggestions />
            {/* <div className="brightness-25 absolute left-[-316px] -top-8 h-[750px] w-[750px] rounded-full bg-gradient-radial from-gradient-dark/90 via-transparent to-transparent pb-9" /> */}
          </div>
          <div className="mt-0 p-2 sm:mt-20">
            <h1 className="pl-3 text-center text-5xl font-bold sm:text-left">
              Smart suggestions
            </h1>
            <p className="mt-2 w-full p-4 text-center sm:w-[80%] sm:text-left">
              Our software offers smart generation capabilities, allowing
              developers to generate high-quality code with ease. With this
              feature, developers can save time and effort in writing code,
              resulting in increased productivity and faster development cycles.
            </p>
          </div>
          <div className="mx-auto mb-24 flex w-96 items-start justify-start sm:ml-40 sm:w-full">
            <BugDetection />
          </div>
          <div className="mt-0 p-2 sm:mt-20">
            <h1 className="pl-3 text-center text-5xl font-bold sm:text-left">
              Test Generation
            </h1>
            <p className="mt-2 w-full p-4 text-center sm:w-[80%] sm:text-left">
              You can generate tests based on the provided function. With this
              feature, developers can quickly and easily generate test cases for
              their functions, ensuring that their code is thoroughly tested and
              reliable. This feature can save developers a significant amount of
              time and effort in manually creating test cases.
            </p>
          </div>
          <div className="mx-auto flex w-96 items-center justify-start sm:ml-40 sm:w-full">
            <AIGeneration />
          </div>
          <div className="mt-0 p-2 sm:mt-20">
            <h1 className="pl-3 text-center text-5xl font-bold sm:text-left">
              Code Ideas
            </h1>
            <p className="mt-2 w-full p-4 text-center sm:w-[80%] sm:text-left">
              Our software includes a feature that provides developers with code
              ideas based on the context of their current project. This feature
              can be especially useful for new developers who may not be as
              familiar with the language or libraries they are working with.
              With this feature, developers can save time in researching and
              experimenting with new code solutions, resulting in faster
              development cycles and increased productivity.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
