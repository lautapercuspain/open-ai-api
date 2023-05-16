import Button from "./Button"

export function ErrorFallback({ resetErrorBoundary }) {
  return (
    <>
      <div className="container space-y-4 py-10 text-center lg:py-14">
        <h5>
          An error has occurred and your request could not be completed. Please
          click Try Again to continue.
        </h5>
        <div className="py-20">
          <Button
            loading={false}
            text="Try Again"
            onClick={() => {
              resetErrorBoundary()
            }}
          />
        </div>
      </div>
    </>
  )
}
