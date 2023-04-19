"use client"

import { Poppins } from "next/font/google"

import Image from "next/image"

const popins = Poppins({
  variable: "--font-popins",
  subsets: ["latin"],
  weight: ["100", "300", "600"],
})

export default function Hero() {
  return (
    <div className={`mt-18 ${popins.variable} font-popins`}>
      <section className="relative mx-auto mt-[10%] flex flex-col items-center justify-center">
        <h3 className="block w-full px-1 py-3 text-center font-popins text-2xl text-white sm:mx-auto sm:w-2/4 sm:text-4xl">
          A smarter, faster way to code with AI assistance.
        </h3>
        <p className="mx-auto mt-3 mb-10 w-full px-3 text-center font-popins text-2xl text-white sm:w-1/2">
          Code writing is tough and time-consuming. Code Genius helps enhance
          your skills. Discover new possibilities!
        </p>
      </section>
      <section className="z-40 mx-auto flex justify-center gap-1 sm:gap-3 ">
        <Image
          className="rounded-md"
          src="/libs/react.svg"
          alt="React JS Library"
          title="React JS Library"
          width="143"
          height="197"
        />
        <Image
          className="rounded-md"
          src="/libs/vuejs.svg"
          alt="Vue JS Library"
          title="Vue JS Library"
          width="143"
          height="197"
        />
        <Image
          className="rounded-md"
          src="/libs/angular.svg"
          alt="Angular JS Library"
          title="Angular JS Library"
          width="143"
          height="197"
        />
      </section>
    </div>
  )
}
