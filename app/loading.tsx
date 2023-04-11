import { Loader2 } from "lucide-react"

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="flex items-center">
      <Loader2 color="white" className="h-8 w-8 animate-spin justify-center" />
    </div>
  )
}
