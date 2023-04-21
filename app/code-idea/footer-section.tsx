import DropDown from "app/components/DropDown"
import Button from "app/components/Button"
import toast, { Toaster } from "react-hot-toast"
import Image from "next/image"
import useClipboard from "utils/useClipboard"
import { useState } from "react"
import { Copy, Save } from "lucide-react"

const notify = () => toast("Code copied!")

export default function FooterSection({
  onSaveCode,
  generatedCode,
  langElement,
  libElements,
  langElements,
  loading,
  setLangElement,
  lib,
  setLib,
  onCodeGeneration,
}: any) {
  const [copied, toggleCopy] = useState(false)
  const { copy } = useClipboard()

  const text =
    generatedCode.length > 0 &&
    generatedCode
      .substring(generatedCode.indexOf("**") + 0)
      .replace("**", "")
      .replace("tsx", "")
      .replace("", "")
      .split("**::")
      .join("")

  const copyHandler = () => {
    copy(text)
    toggleCopy(!copied)
    notify()
  }

  return (
    <>
      <Toaster />
      <section
        className="fixed bottom-0 left-0 z-50 flex h-16 w-[101%] items-center
          justify-between bg-purple-800"
      >
        <div className="ml-16 mb-10">
          <div className="ml-4">
            <DropDown
              bgColor="bg-purple-500"
              elements={langElements}
              element={langElement}
              setElement={(newElement) => setLangElement(newElement)}
            />
          </div>
          <div className="ml-52">
            <DropDown
              bgColor="bg-purple-500"
              elements={libElements}
              element={lib}
              setElement={(newLib) => setLib(newLib)}
            />
          </div>
          <div
            onClick={onSaveCode}
            className="absolute h-[40px] w-[40px] cursor-pointer rounded-md bg-purple-700 sm:left-[470px] sm:bottom-[10.5px]"
          >
            <Save
              width={24}
              height={24}
              className="mx-auto mt-2 text-white hover:text-mint"
            />
          </div>
          <div
            onClick={() => copyHandler()}
            className="absolute h-[40px] w-[40px] cursor-pointer rounded-md bg-purple-700 sm:left-[530px] sm:bottom-[10.5px]"
          >
            <Copy
              width={24}
              height={24}
              className="mx-auto mt-2 text-white hover:text-mint"
            />
          </div>
        </div>
        <div className="mr-8">
          <Button
            onClick={onCodeGeneration}
            loading={loading}
            variant="mint"
            text="Generate"
          />
        </div>
      </section>
    </>
  )
}
