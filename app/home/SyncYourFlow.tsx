import Image from "next/image"
import { useRouter } from "next/navigation"

export default function SyncYourFlow({ translations }) {
  const router = useRouter()
  return (
    <div className="mx-auto my-20 w-screen ">
      <h3 className="flex justify-center px-4 text-center text-4xl text-white sm:text-5xl">
        {translations.title}
      </h3>
      <p className="my-4 mb-10 mt-5 flex justify-center px-4 text-center text-2xl text-white">
        {translations.subtitle}
      </p>

      <div
        className="mx-auto  flex h-auto w-[90%] grid-cols-1 flex-col justify-center rounded-xl bg-gradient-to-t from-[#6530FC] to-[#A486FF] p-4 font-semibold sm:grid sm:h-auto
      sm:w-[1050px] sm:grid-cols-2 sm:p-0"
      >
        <div
          id="col-1"
          className="my-3 flex w-full justify-center sm:my-10 sm:ml-2 sm:mt-5 sm:w-[650px] sm:justify-start"
        >
          <Image
            className="my-8 sm:my-0 sm:ml-12"
            src="/home/github1.svg"
            width={380}
            height={280}
            alt="Generated unit test on the flight"
          />
        </div>
        <div id="col-2" className="mr-6 sm:mt-12">
          <h3 className="w-full text-center text-3xl font-semibold leading-tight text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.2)] sm:max-w-[550px]  sm:text-left sm:text-5xl">
            {translations.bannerTitle}
          </h3>
          <p className="mt-6 text-center text-1xl leading-tight text-white sm:text-left">
            {translations.bannerSubTitle}
          </p>
          <div className="flex justify-center sm:justify-start">
            <div
              onClick={() => router.push("/pricing")}
              className="my-6 w-[250px] cursor-pointer rounded-lg bg-black"
            >
              <p className="py-2 text-center text-1xl text-white hover:text-gray-200">
                {translations.cta}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
