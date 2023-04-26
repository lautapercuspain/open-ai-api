//Fill in the props type and add it to GradientButton
type GradientButtonPros = {
  width?: string
  height?: string
  from?: string
  to?: string
  text?: string
}

export default function GradientButton({
  width = "80%",
  height = "48px",
  from = "#A1FFE0",
  to = "#2C9DC0",
  text = "Buy Credits",
}: GradientButtonPros) {
  return (
    <div
      className={`my-4 mx-auto mb-4 mt-2 flex w-[${width}] cursor-pointer flex-row items-center justify-center 
rounded-lg bg-gradient-to-r from-[${from}] to-[${to}] p-[2px] font-mono
sm:items-start sm:justify-center`}
    >
      <div
        className={`relative h-[${height}] w-[100%] items-center justify-center rounded-lg bg-purple-500`}
      >
        <div className="text-sm px-1 py-3 text-center  text-white sm:mx-auto sm:px-2">
          {text}
        </div>
      </div>
    </div>
  )
}
