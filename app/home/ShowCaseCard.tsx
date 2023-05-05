"use client"

import { ReactNode } from "react"

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
    <div className="mx-auto flex min-h-[404px] w-[80%] items-start rounded-2xl bg-purple-500 p-6 text-center font-sans shadow-xl">
      <div className="flex flex-col sm:flex-row">
        <div className="w-[90%] p-2">
          <h3 className="mx-auto flex w-[100%] bg-gradient-to-r from-[#A1FFE0] to-[#2C9DC0] bg-clip-text pl-3 text-center text-2xl font-bold text-transparent sm:ml-0 sm:w-[85%] sm:justify-start sm:text-left sm:text-5xl sm:leading-[48px]">
            {title}
          </h3>
          <p className="mt-2 w-full p-4 text-center sm:w-[80%] sm:text-left">
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
    </div>
  )
}
