"use client"

import GradientButton from "app/components/buttons/gradientButton"
import { Check } from "lucide-react"
import Image from "next/image"
import React from "react"
import tailwindConfig from "tailwind.config"

import Faqs from "./faqs"

export default function Page() {
  const colors: any = tailwindConfig.theme?.extend?.colors
  const [credits, setCredits] = React.useState(10)

  return (
    <>
      <main className="flex w-full flex-col items-center justify-center px-4 text-center sm:mt-12">
        <div className="container mx-auto mb-20 px-4 pt-20 lg:px-0">
          <h1 className="mb-3 text-3xl font-bold text-white dark:text-white sm:text-4xl sm:leading-none sm:tracking-tight">
            Only pay what you use
          </h1>
          <p className="text-gray-200">
            No hidden fees. No surprise bills. And based on how much credits
            you’re actually using.
          </p>
          {/* <!-- Pricing Cards --> */}
          <section className="grid grid-cols-1 space-y-12 pt-9 md:grid-cols-2 md:gap-6 md:gap-x-6 md:space-y-0 lg:grid-cols-2">
            {/* <!-- Premium  Card --> */}
            <div className="mx-auto flex w-full max-w-lg flex-col rounded-lg bg-purple-500 p-6 text-white shadow-sm sm:min-w-[476px] xl:p-8">
              <Image
                src="/icons/premium.svg"
                alt="Premium membership"
                width={40}
                height={40}
                className="mx-auto"
              />
              <h3 className="my-2 mb-2 text-2xl font-semibold text-mint">
                Premium
              </h3>

              <div className="my-4 flex items-center justify-center">
                <span className="mr-2 text-center text-5xl font-extrabold">
                  $ 4.99 USD
                </span>
              </div>
              <div className="my-4">
                <div
                  onClick={() => setCredits(10)}
                  className={`text-xs leading-sm ml-4 inline-flex w-16 cursor-pointer items-center justify-center rounded-full border border-white ${
                    credits === 10
                      ? "border-none bg-[#7477FB]"
                      : "bg-transparent"
                  }  px-3 py-1 font-bold uppercase text-white`}
                >
                  10
                </div>
                <div
                  onClick={() => setCredits(25)}
                  className={`text-xs leading-sm ml-4 inline-flex w-16 cursor-pointer items-center justify-center rounded-full border border-white px-3 py-1 font-bold uppercase text-white ${
                    credits === 25
                      ? "border-none bg-[#7477FB]"
                      : "bg-transparent"
                  } `}
                >
                  25
                </div>
                <div
                  onClick={() => setCredits(50)}
                  className={`text-xs leading-sm ml-4 inline-flex w-16 cursor-pointer items-center justify-center rounded-full border border-white px-3 py-1 font-bold uppercase text-white ${
                    credits === 50
                      ? "border-none bg-[#7477FB]"
                      : "bg-transparent"
                  } `}
                >
                  50
                </div>
                <div
                  onClick={() => setCredits(100)}
                  className={`text-xs leading-sm ml-4 inline-flex w-16 cursor-pointer items-center justify-center rounded-full border border-white px-3 py-1 font-bold uppercase text-white ${
                    credits === 100
                      ? "border-none bg-[#7477FB]"
                      : "bg-transparent"
                  } `}
                >
                  100
                </div>
              </div>
              <div
                className={`my-4 mx-auto mb-4 mt-2 flex w-[80%] cursor-pointer flex-row items-center justify-center 
      rounded-lg bg-gradient-to-r from-[#A1FFE0] to-[#2C9DC0] p-[2px] font-mono
    sm:items-start sm:justify-center`}
              >
                <div className="relative h-[48px] w-[100%] items-center justify-center rounded-lg bg-purple-500 ">
                  <div className="text-sm px-1 py-3 text-center  text-white sm:mx-auto sm:px-2">
                    Buy Credits
                  </div>
                </div>
              </div>

              {/* <!-- List --> */}
              <ul role="list" className="my-6 space-y-4 text-left">
                <li className="flex items-center  space-x-3">
                  {/* <!-- Icon --> */}
                  <Check color={colors.mint} size={20} />
                  <span>Individual configuration</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check color={colors.mint} size={20} />
                  <span>
                    Team size:{" "}
                    <span className="font-semibold">1 developer</span>
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check color={colors.mint} size={20} />
                  <span>
                    Premium support:{" "}
                    <span className="font-semibold">6 months</span>
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check color={colors.mint} size={20} />
                  <span>
                    Free updates:{" "}
                    <span className="font-semibold">6 months</span>
                  </span>
                </li>
              </ul>
              <a
                href="#"
                className="bg-primary-600 hover:bg-primary-700 focus:ring-primary-200 text-sm dark:focus:ring-primary-900 rounded-lg px-5 py-2.5 text-center font-medium text-white focus:ring-4  dark:text-white"
              >
                Get started
              </a>
            </div>
            {/* <!-- Enterprice Card --> */}
            <div className="mx-auto flex w-full max-w-lg flex-col rounded-lg bg-purple-500 p-6 text-white shadow-sm sm:min-w-[476px] xl:p-8">
              <Image
                src="/icons/enterprice.svg"
                alt="Premium membership"
                width={40}
                height={40}
                className="mx-auto"
              />
              <h3
                className={`mt-2 mb-4 bg-gradient-to-r from-[#B095FF] via-[#8ABFE5] to-[#B1EAF1] bg-clip-text font-inter text-2xl font-semibold text-transparent`}
              >
                Enterprise
              </h3>
              <div className="my-4 flex flex-col items-center justify-center">
                <span className="mr-2 text-center text-5xl font-extrabold">
                  $ 19.99 USD
                </span>
                <span className="text-sm mt-7 text-center">
                  Per user, per month.
                </span>
              </div>
              <GradientButton text="Contact Us" />
              {/* <div className="my-4 font-bold">
              </div> */}

              <ul role="list" className="my-6 space-y-4 text-left">
                <li className="flex items-center  space-x-3">
                  <Check color={colors.mint} size={20} />
                  <span className="font-bold">Everything in Premium plus:</span>
                </li>
                <li className="flex items-center  space-x-3">
                  {/* <!-- Icon --> */}
                  <Check color={colors.mint} size={20} />
                  <span>Individual configuration</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check color={colors.mint} size={20} />
                  <span>
                    Team size:{" "}
                    <span className="font-semibold">1 developer</span>
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check color={colors.mint} size={20} />
                  <span>
                    Premium support:{" "}
                    <span className="font-semibold">6 months</span>
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check color={colors.mint} size={20} />
                  <span>
                    Free updates:{" "}
                    <span className="font-semibold">6 months</span>
                  </span>
                </li>
              </ul>
            </div>
          </section>
          <section className="pt-20">
            <h2 className="mb-3 text-3xl font-bold text-gray-200 dark:text-white sm:text-4xl sm:leading-none sm:tracking-tight">
              Frequently asked questions
            </h2>
          </section>

          <Faqs />
        </div>
      </main>
    </>
  )
}
