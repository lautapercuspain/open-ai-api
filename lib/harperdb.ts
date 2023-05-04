/**
 * harperClient
 */

export async function harperClient(body) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${process.env.HARPER_API_KEY}`,
    },
    body: JSON.stringify(body),
  }
  const harperURL = process.env.HARPER_DATABASE_URL || ""
  const response = await fetch(harperURL, requestOptions)
  const result = await response.text()

  // return result
  // console.log("result", result)

  return JSON.parse(result, (key, value) => {
    // console.log("key:", key)
    // console.log("value:", value)

    if (
      !isNaN(Date.parse(value)) &&
      key !== "credits" &&
      key !== "amount" &&
      key !== "apiCalls"
    ) {
      return new Date(value)
    }
    return value
  })
}
