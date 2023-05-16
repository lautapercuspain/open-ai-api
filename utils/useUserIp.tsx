// uils/useUserIp.tsx
import { useEffect, useState } from "react"
import Cookies from "js-cookie"

export const useUserIp = () => {
  const [ip, setUserIp] = useState<string>("")
  useEffect(() => {
    const userIp = Cookies.get("user-ip") ?? ""
    setUserIp(userIp)
  }, [])

  return ip
}
