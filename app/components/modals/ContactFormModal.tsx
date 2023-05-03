"use client"

import { Dialog, Transition } from "@headlessui/react"
import Loading from "app/loading"
import { ArrowLeft, Send } from "lucide-react"
import { Inter } from "next/font/google"
import { Fragment, useState } from "react"

interface Props {
  isOpen: boolean
  thanksMessage?: boolean
  clientName?: string
  purchasedCredits?: number
  setIsOpen: (arg: boolean) => void
}

type FormValues = {
  workEmail: string
  name: string
  numberOfLicenses: number
}

const initialFormValues: FormValues = {
  name: "",
  workEmail: "",
  numberOfLicenses: 10,
}

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "300", "400", "600", "700"],
})

export default function ContactFormModal({
  isOpen,
  setIsOpen,
  purchasedCredits,
  clientName,
  thanksMessage,
}: Props) {
  const [formValues, setFormValues] = useState<FormValues>(initialFormValues)
  const [message, setMessage] = useState<string>("")
  const [loading, setIsLoading] = useState<boolean>(false)
  const [isDone, setIsDone] = useState<boolean>(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    const payload = {
      name: formValues.name,
      contactEmail: formValues.workEmail,
      message: message,
    }
    //Using Fetch, post to API api/email/send.ts and pass name, contactEmail, message in the body as a payload
    const res = await fetch("/api/email/send", {
      method: "POST",
      body: JSON.stringify(payload),
    })

    if (res.ok) {
      setIsLoading(false)
      setIsDone(true)
    }
  }

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => setIsOpen(false)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>
        <div
          className={`${inter.variable} fixed inset-0 overflow-y-auto font-inter`}
        >
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                className={
                  "w-[100%] transform overflow-hidden rounded-2xl bg-purple-600 p-4 text-left shadow-xl transition-all md:h-full md:w-[90%] lg:h-fit lg:w-[650px]"
                }
              >
                <div className="flex flex-col content-center justify-start justify-items-start gap-4 sm:p-12">
                  <div
                    className="relative block cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  >
                    <ArrowLeft size={25} color="white" />
                  </div>
                  {loading && !thanksMessage && (
                    <>
                      <Dialog.Title
                        as="h1"
                        className="font-poppins mx-auto text-center text-2xl  text-white "
                      >
                        Sending message..
                      </Dialog.Title>
                    </>
                  )}
                  {!loading && !isDone && !thanksMessage && (
                    <>
                      <Dialog.Title
                        as="h1"
                        className="font-poppins text-center text-2xl leading-6 text-white sm:text-left sm:text-3xl"
                      >
                        Talk to an expert
                      </Dialog.Title>
                      <Dialog.Title
                        as="h1"
                        className={`text-sm sm:text-md text-center font-inter leading-10 text-gray-200 sm:text-left`}
                      >
                        We will be happy to answer all your questions
                      </Dialog.Title>
                      <hr className="border-1 border-purple-500" />
                      {/* Contact Form */}
                      <form className="flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                          <label
                            htmlFor="name"
                            className="font-inter text-[13px] text-purple-300"
                          >
                            Name
                          </label>
                          <input
                            name="name"
                            id="name"
                            className="w-full rounded-md border border-purple-500 bg-purple-700 p-3 text-white placeholder:text-purple-300 focus:border-purple-500 focus:ring-purple-400"
                            placeholder=""
                            value={formValues.name}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="flex flex-col gap-2">
                          <label
                            htmlFor="workEmail"
                            className="font-inter text-[13px] text-purple-300"
                          >
                            Work E-mail
                          </label>
                          <input
                            name="workEmail"
                            id="workEmail"
                            className="w-fullrounded-md border border-purple-500 bg-purple-700 p-3 text-white placeholder:text-purple-300 focus:border-purple-500 focus:ring-purple-400"
                            placeholder=""
                            value={formValues.workEmail}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        {/* <div className="flex-grow-1 flex flex-col gap-2">
                      <label
                        htmlFor="numberOfLicenses"
                        className="font-inter text-[13px] text-purple-300"
                      >
                        Number of employees who will use Code Genius:
                      </label>
                      <input
                        name="numberOfLicenses"
                        id="numberOfLicenses"
                        className="block w-24 rounded-md border border-purple-500 bg-purple-700 p-3 font-inter text-white placeholder:text-purple-300 focus:border-purple-500 focus:ring-purple-400"
                        type="number"
                        value={formValues.numberOfLicenses}
                        onChange={handleChange}
                        required
                      />
                    </div> */}
                        <div className="flex-grow-1 flex flex-col gap-2">
                          <label
                            htmlFor="howCanWeHelp"
                            className="font-inter text-[13px] text-purple-300"
                          >
                            How we can help?
                          </label>
                          <textarea
                            name="howCanWeHelp"
                            id="howCanWeHelp"
                            className="block w-full rounded-md border border-purple-500 bg-purple-700 p-3 text-white placeholder:text-gray-400 focus:border-purple-500 focus:ring-purple-400"
                            placeholder="Tell us about your business needs"
                            value={message}
                            onChange={(e) => {
                              setMessage(e.target.value)
                            }}
                            required
                          />
                        </div>

                        <div className="mt-4 flex flex-row justify-end gap-4 sm:items-center ">
                          <div className="basis-5/4">
                            <button
                              type="submit"
                              onClick={(e) => handleSubmit(e)}
                              className="w-full rounded-md border-2 border-transparent bg-mint px-10 py-3 font-inter text-black"
                            >
                              Send
                            </button>
                          </div>
                        </div>
                      </form>
                    </>
                  )}
                  {loading && <Loading />}
                  {isDone && !thanksMessage && (
                    <div className="flex flex-col items-center justify-center">
                      <Dialog.Title
                        as="h1"
                        className="text-center text-2xl leading-6 text-white sm:text-left sm:text-3xl"
                      >
                        <span className="capitalize">{formValues.name}</span>,
                      </Dialog.Title>
                      <p className="text-sm mt-4 text-white">
                        Talks for being interested in Code Genius.
                      </p>
                      <p className="text-sm -mt-1 text-white">
                        An expert will reach you soon.
                      </p>
                    </div>
                  )}
                  {thanksMessage && (
                    <div className="flex flex-col items-center justify-center">
                      <Dialog.Title
                        as="h1"
                        className=" text-2xl leading-6 text-white sm:text-left sm:text-3xl"
                      >
                        <div className="flex flex-col items-center">
                          <span className="absolute top-5">
                            Thanks for your purchase
                          </span>
                          <span className="absolute top-12 mt-4">
                            {clientName}!
                          </span>
                        </div>
                      </Dialog.Title>
                      <p className="text-sm mt-4 w-[65%] text-center text-white">
                        You have now {purchasedCredits} credits extra to create
                        with Code Genius.
                      </p>
                    </div>
                  )}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
