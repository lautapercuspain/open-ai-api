import Image from "next/image"

type CardProps = {
  title: string
  text: string
  imageSrc?: string //react ReactNode
  onClick?: (text: string) => void
}
export default function PromptCard({
  title,
  imageSrc,
  text,
  onClick,
  size,
}: CardProps & { size?: "large" | "small" }) {
  return (
    <div
      className={`mt-4 block ${
        size === "large"
          ? "h-60 w-[45%]"
          : "w-[100%] sm:min-h-[200px] sm:w-[23%]"
      } cursor-pointer rounded-lg bg-purple-700 p-6 shadow hover:bg-purple-500`}
      onClick={() => {
        if (onClick) onClick(text)
      }}
    >
      {imageSrc && (
        <Image
          alt="Dashboard"
          src={imageSrc}
          width={40}
          height={40}
          className="mb-2"
        />
      )}

      <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
        {title}
      </h5>
      <p className="text-sm font-normal text-gray-400">{text}</p>
    </div>
  )
}
