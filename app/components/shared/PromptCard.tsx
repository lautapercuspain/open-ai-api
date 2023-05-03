import useWindowSize from "hooks/use-window-size"
import Image from "next/image"
import { ReactNode } from "react"

type CardProps = {
  title: string
  text: string
  width?: string
  mb?: string
  order?: string
  button?: ReactNode
  imageSrc?: string //react ReactNode
  onClick?: (text: string) => void
}
export default function PromptCard({
  title,
  button,
  width,
  mb,
  order,
  imageSrc,
  text,
  onClick,
  size,
}: CardProps & { size?: "large" | "small" }) {
  return (
    <div
      className={`${order} mt-4 flex ${
        size === "large"
          ? width + " h-60"
          : "h-60 w-[100%] sm:min-h-[230px] sm:w-[23%]"
      } 
      ${mb} cursor-pointer justify-between rounded-lg bg-purple-700 p-6 shadow hover:bg-purple-500`}
      onClick={() => {
        if (onClick) onClick(text)
      }}
    >
      <div>
        {imageSrc && (
          <Image
            alt="Dashboard"
            src={imageSrc}
            width={40}
            height={40}
            className="mb-2"
          />
        )}

        <h5 className="mb-2 pt-2 text-2xl font-bold tracking-tight text-white">
          {title}
        </h5>
        <p className="text-sm pt-2 font-normal text-gray-200">{text}</p>
      </div>
      {button && <div className="my-auto">{button}</div>}
    </div>
  )
}
