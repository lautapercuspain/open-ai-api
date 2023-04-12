import { Loader2 } from "lucide-react"

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="mx-auto flex flex-col items-center justify-center">
      <Loader2 color="white" className="h-8 w-8 animate-spin" />
    </div>
  )
}
