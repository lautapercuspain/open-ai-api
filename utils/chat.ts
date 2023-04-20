import { parseText } from "./parseText"
import { Message } from "@chatscope/chat-ui-kit-react"

interface CodeMessagesProps {
  generatedMessages: any
}

export const LiveDemoMessages: React.FC<CodeMessagesProps> = ({
  generatedMessages,
}) => {
  return (
    <>
      {generatedMessages.map((generatedMessage) => {
        const result = parseText(generatedMessage)

        return result.length
          ? result.map((item: any) => {
              if (item.hasOwnProperty("text")) {
                return (
                  <Message
                    className="my-2 text-left leading-7"
                    model={{
                      message: item.text,
                      direction: "incoming",
                      position: "normal",
                    }}
                  />
                )
              } else {
                return (
                  <GenerateCode
                    align="start"
                    blackBackground
                    generatedCode={item.code}
                  />
                )
              }
            })
          : null
      })}
    </>
  )
}
