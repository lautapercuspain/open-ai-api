export default function PromptCard({ title, text, onClick }) {
  return (
    <div
      onClick={() => onClick(text)}
      className="mt-4 block max-w-[320px] cursor-pointer rounded-lg bg-purple-700 p-6 shadow hover:bg-purple-400"
    >
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">{text}</p>
    </div>
  )
}
