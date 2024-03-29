import Image from "next/image"
import Modal from "app/components/Modal"

import CurveArrow from "./CurveArrow"
import { useState } from "react"
import useMediaQuery from "hooks/use-media-query"

export default function GoFromThis({ translations }) {
  const [isOpenFirst, setIsOpenFirst] = useState(false)
  const [isOpenSecond, setIsOpenSecond] = useState(false)
  const { isDesktop } = useMediaQuery()
  return (
    <>
      <div className="relative mx-auto mt-28 flex w-screen flex-col items-center justify-center">
        <p className=" text-center text-4xl font-semibold text-white sm:text-5xl">
          {translations.title}
        </p>
        <p className="mb-8 mt-6 px-4 text-center text-2xl text-celeste">
          {translations.subtitle}
        </p>
        <CurveArrow isEnd={false} />
        <p className="mx-auto w-32 text-center text-white sm:hidden">
          {translations.start}
        </p>
        <div className="w-screen">
          <div className="mx-auto hidden sm:flex sm:justify-evenly">
            <p className="mt-8 text-3xl font-semibold text-white">
              {translations.fromThis}
            </p>
            <p className="mr-8 mt-8 pr-8 text-3xl font-semibold text-white">
              {translations.toThis}
            </p>
          </div>
          <div
            className={`mx-auto mt-12 grid w-[90%] grid-cols-1 flex-col place-items-start gap-x-0 sm:w-[1100px] sm:grid-cols-2 sm:place-items-center`}
          >
            <div
              className="flex h-[444px] w-full flex-col items-center justify-center rounded-[35px] bg-gradient-to-b from-[#B095FF] via-[#8ABFE5] 
            to-[#B1EAF1] sm:w-[500px]"
            >
              {isDesktop && (
                <Modal
                  isImageModal
                  title={translations?.sure}
                  body={
                    <Image
                      className={`m-10 scale-125`}
                      src="/home/from-this.svg"
                      alt="Go from this component"
                      width={506}
                      height={383}
                    />
                  }
                  isOpen={isOpenFirst}
                  buttonLink={undefined}
                  setIsOpen={setIsOpenFirst}
                />
              )}
              <Image
                className={`scale-90 cursor-pointer duration-300 ease-in hover:scale-[1.15] sm:scale-100`}
                src="/home/from-this.svg"
                onClick={() => setIsOpenFirst(true)}
                alt="Go from this component"
                width={406}
                height={283}
              />
            </div>
            <div
              className="mt-12 flex h-[444px] w-full flex-col items-center justify-center rounded-[35px]
               bg-gradient-to-b from-[#B095FF] via-[#8ABFE5] to-[#B1EAF1] sm:mt-0 sm:w-[505px] "
            >
              {isDesktop && (
                <Modal
                  isImageModal
                  title={translations?.sure}
                  body={
                    <Image
                      className={`m-10 scale-125`}
                      src="/home/to-this.svg"
                      alt="To this unit test"
                      width={506}
                      height={437}
                    />
                  }
                  isOpen={isOpenSecond}
                  buttonLink={undefined}
                  setIsOpen={setIsOpenSecond}
                />
              )}
              <Image
                className="scale-90 cursor-pointer duration-300 ease-in hover:scale-[1.15] sm:scale-100"
                onClick={() => setIsOpenSecond(true)}
                src="/home/to-this.svg"
                alt="To this unit test"
                width={406}
                height={337}
              />
            </div>
          </div>
          ``
        </div>
        <p className="mx-auto w-40 pt-12 text-center text-white sm:hidden">
          {translations.end}
        </p>
        <div className="mt-2 sm:mt-4">
          <p className="top-2 mb-8 hidden text-3xl font-semibold text-white sm:block">
            {translations.inSeconds}
          </p>
          <CurveArrow isEnd />
        </div>
      </div>
    </>
  )
}
