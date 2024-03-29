import DropDown from "app/components/DropDown"
import Button from "app/components/Button"
import { Hand, XCircle } from "lucide-react"
import { MaterialTooltip } from "app/components/material-components"

// const notify = () => toast("Code copied!")

export default function FooterSection({
  translations,
  isPremium,
  mode,
  setUserHasAResponse,
  setTestFrameworkElement,
  testFrameworkElement,
  testFrameworkElements,
  testLibElement,
  testLibElements,
  setDocOptions,
  docOptions,
  clearPanel,
  stopGeneration,
  setTestLib,
  langElement,
  langElements,
  loading,
  setLangElement,
  lib,
  libElements,
  setLib,
  onCodeGeneration,
}: any) {
  return (
    <>
      {/* <Toaster /> */}
      <section
        className="absolute  bottom-0 left-0 z-50 h-16 w-full border-t-[1px] border-purple-500
          bg-purple-800 sm:flex sm:items-center sm:justify-end"
      >
        <div className="mb-10 ml-20 hidden sm:ml-2 sm:block">
          {mode === "smart" && (
            <>
              <div className="sm:ml-4">
                <DropDown
                  bgColor="bg-purple-500"
                  elements={langElements}
                  element={langElement}
                  setElement={(newElement) => setLangElement(newElement)}
                />
              </div>
              {langElement !== "Python" && (
                <div className={`ml-0 sm:ml-56`}>
                  <DropDown
                    bgColor="bg-purple-500"
                    elements={libElements}
                    element={lib}
                    setElement={(newLib) => setLib(newLib)}
                  />
                </div>
              )}
            </>
          )}
          {mode === "test" && (
            <>
              <div className="sm:ml-4">
                <DropDown
                  bgColor="bg-purple-500"
                  elements={testFrameworkElements}
                  element={testFrameworkElement}
                  setElement={(item) => setTestFrameworkElement(item)}
                />
              </div>
              {testFrameworkElement !== "Cypress" && (
                <div className={`ml-0 sm:ml-56`}>
                  <DropDown
                    bgColor="bg-purple-500"
                    elements={testLibElements}
                    element={testLibElement}
                    setElement={(item) => setTestLib(item)}
                  />
                </div>
              )}
            </>
          )}
          {mode === "docs" && (
            <>
              <div className="sm:ml-4">
                <DropDown
                  bgColor="bg-purple-500"
                  elements={["MDX Docs", "Inline Docs"]}
                  element={docOptions}
                  setElement={(item) => setDocOptions(item)}
                />
              </div>
            </>
          )}
        </div>
        <div className="mr-3 flex justify-between pt-3 sm:mx-auto sm:mr-0 sm:items-center sm:justify-end sm:gap-0 sm:pt-0">
          <div className="ml-4 flex sm:ml-0">
            <MaterialTooltip
              className="-mt-3 border-[1px] border-gray-500 bg-purple-900  text-gray-200"
              content={translations.clear}
              animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0, y: 25 },
              }}
            >
              <div
                data-tooltip-target="clear-pannel"
                onClick={() => clearPanel()}
                className={`mr-3 h-[40px] w-[40px] cursor-pointer rounded-md bg-purple-500`}
              >
                <XCircle
                  width={24}
                  height={24}
                  className="mx-auto mt-2 text-white hover:text-mint"
                />
              </div>
            </MaterialTooltip>
            <MaterialTooltip
              className="-mt-3  border-[1px] border-gray-500 bg-purple-900  text-gray-200"
              content={translations.stop}
              animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0, y: 25 },
              }}
            >
              <div
                onClick={() => stopGeneration()}
                className={`mr-3 h-[40px] w-[40px] cursor-pointer rounded-md bg-purple-500`}
              >
                <Hand
                  width={24}
                  height={24}
                  className="mx-auto mt-2  text-white hover:text-mint"
                />
              </div>
            </MaterialTooltip>
          </div>
          <div className="flex sm:mr-4">
            <Button
              disabled={!isPremium && mode !== "smart"}
              onClick={() => {
                onCodeGeneration()
                setUserHasAResponse(false)
              }}
              loading={loading}
              variant="mint"
              text={translations.generate}
            />
          </div>
        </div>
      </section>
    </>
  )
}

// const [copied, toggleCopy] = useState(false)

// const { copy } = useClipboard()

// const text =
//   generatedCode.length > 0 &&
//   generatedCode
//     .substring(generatedCode.indexOf("**") + 0)
//     .replace("**", "")
//     .replace("tsx", "")
//     .replace("", "")
//     .split("**::")
//     .join("")

// const copyHandler = () => {
//   copy(text)
//   toggleCopy(!copied)
//   notify()
// }
