"use client"

import { ReactNode } from "react"
import { motion } from "framer-motion"

type ShowCaseCardProps = {
  image: ReactNode
  title: string
  description: string
  button?: ReactNode
}

export default function ShowCaseCard({
  title,
  description,
  image,
  button,
}: ShowCaseCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="mx-auto flex h-auto w-[90%] items-start rounded-2xl bg-purple-700 p-6 text-center font-sans shadow-xl sm:min-h-[404px] sm:w-[80%]"
    >
      <div className="flex flex-col sm:flex-row">
        <div className="w-full p-2 sm:w-[80%]">
          <h3 className="mx-auto flex w-full bg-gradient-to-r from-[#A1FFE0] to-[#2C9DC0] bg-clip-text text-center text-3xl font-bold  text-transparent sm:ml-0 sm:w-[85%] sm:justify-start sm:pl-3 sm:text-left sm:text-5xl sm:leading-[48px]">
            {title}
          </h3>
          <p className="mt-2 w-full p-4 text-center text-gray-200 sm:w-[80%] sm:text-left">
            {description}
          </p>
          {button && (
            <div className="ml-4 mt-4 flex justify-center sm:items-start sm:justify-start">
              {button}
            </div>
          )}
        </div>
        <div className="my-auto hidden w-[475px] sm:block">{image}</div>
      </div>
    </motion.div>
  )
}
