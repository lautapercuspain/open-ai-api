"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import ContactFormModal from "./modals/ContactFormModal"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export default function Footer({
  session,
  translations,
}: {
  session: any
  translations: any
}) {
  const [openContactForm, setOpenContactForm] = React.useState<boolean>(false)
  const pathName = usePathname()
  const shouldShowFooter =
    pathName == "/" ||
    pathName?.startsWith("/blog") ||
    pathName == "/terms-and-conditions" ||
    pathName == "/privacy"
  return (
    <>
      {shouldShowFooter ? (
        <footer>
          <ContactFormModal
            clientName={(session && session?.user && session?.user?.name) || ""}
            isOpen={openContactForm}
            setIsOpen={setOpenContactForm}
          />
          <div
            className={`mx-auto flex w-screen flex-col border-t border-gray-200 bg-purple-900 font-sans text-white`}
          >
            <div className="flex flex-col items-center justify-center px-5 py-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="justify-center">
                <Link href="/" className={`mt-7 flex sm:mx-0 sm:ml-2`}>
                  <Image
                    src={"/logo/code-genius.svg"}
                    width={32}
                    height={32}
                    alt="Code Genius"
                  />

                  <h1
                    className={`text-lg sm:text-xl sm:text-xl ml-3 mt-2 
                    bg-gradient-to-r from-mint to-blue
                  bg-clip-text
                 font-sans text-2xl font-bold tracking-tight text-transparent max-md:pt-4 max-sm:pt-0 sm:leading-6`}
                  >
                    Code Genius
                  </h1>
                </Link>
              </div>
              <div className={cn("mt-8 flex text-white sm:pt-2")}>
                <div
                  onClick={() => setOpenContactForm(true)}
                  className="cursor-pointer px-4 sm:px-2 sm:text-[16px]"
                >
                  {translations?.contact}
                </div>
                <Link
                  href="/pricing"
                  prefetch={false}
                  className="cursor-pointer px-4 sm:px-2 sm:text-[16px]"
                >
                  {translations?.pricing}
                </Link>
                <Link
                  href="https://discord.gg/3tbJD8vZQw"
                  className="cursor-pointer px-4 sm:px-2 sm:text-[16px]"
                >
                  Discord
                </Link>
                <Link
                  href="/terms-and-conditions"
                  prefetch={false}
                  className="hidden cursor-pointer px-4 sm:block sm:px-2 sm:text-[16px]"
                >
                  {translations?.terms}
                </Link>
                <Link
                  href="/privacy"
                  prefetch={false}
                  className="hidden cursor-pointer px-4 sm:block sm:px-2 sm:text-[16px]"
                >
                  {translations?.privacy}
                </Link>
              </div>
            </div>
            <div
              className={`w-screen content-center border-t ${
                pathName?.startsWith("/blog")
                  ? "border-none"
                  : "border-gray-400"
              }  px-5 py-4`}
            >
              <p
                className={cn("text-center font-normal text-gray-300", {
                  "text-white": pathName?.startsWith("/blog"),
                })}
              >
                {translations?.copy}
              </p>
            </div>
          </div>
        </footer>
      ) : null}
    </>
  )
}
