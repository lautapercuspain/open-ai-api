//Fill in the props type and add it to GradientButton
type GradientButtonPros = {
  width?: string
  height?: string
  from?: string
  to?: string
  text?: string
  bg?: string
  onClick?: () => void
}

export default function GradientButton({
  width = "80%",
  height = "48px",
  from = "#A1FFE0",
  to = "#2C9DC0",
  text = "Buy Credits",
  bg = "bg-purple-700",
  onClick,
}: GradientButtonPros) {
  return (
    <div
      onClick={onClick}
      className={`my-4 mx-auto mb-4 mt-2 flex w-[${width}] cursor-pointer flex-row items-center justify-center 
rounded-lg bg-gradient-to-r from-[${from}] to-[${to}] p-[2px] font-sans 
sm:items-start sm:justify-center`}
    >
      <div
        className={`relative h-[${height}] w-[100%] items-center justify-center rounded-lg ${bg}`}
      >
        <div className="text-sm px-1 py-3 text-center  text-white sm:mx-auto sm:px-2">
          {text}
        </div>
      </div>
    </div>
  )
}
