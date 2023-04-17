import DropDown from "app/components/DropDown"
import Button from "app/components/Button"

export default function FooterSection({
  langElement,
  libElements,
  langElements,
  loading,
  setLangElement,
  lib,
  setLib,
  onCodeGeneration,
}: any) {
  return (
    <section
      className="z-0 flex h-16 w-[101%] items-center
          justify-between 
          border-t-2 border-gray-600 bg-purple-700 "
    >
      <div className="mb-10 ml-6">
        <div className="ml-4">
          <DropDown
            elements={langElements}
            element={langElement}
            setElement={(newElement) => setLangElement(newElement)}
          />
        </div>
        <div className="ml-52">
          <DropDown
            elements={libElements}
            element={lib}
            setElement={(newLib) => setLib(newLib)}
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
  )
}
