"use client"

import { ErrorBoundary } from "react-error-boundary"
import { ErrorFallback } from "./components/ErrorFallback"

export default function Error({ children }) {
  const errorHandler = (error: Error, info: { componentStack: string }) => {
    //Error log
    console.error("Clien side application error:", {
      Stack: info,
      Message: error,
    })
  }

  return (
    <ErrorBoundary onError={errorHandler} FallbackComponent={ErrorFallback}>
      {children}
    </ErrorBoundary>
  )
}
