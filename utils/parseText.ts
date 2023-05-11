export function parseText(text = "", delimiter = "```") {
  const parts = text.split(delimiter)
  const result: any = []
  let isInCodeBlock = false
  for (let i = 0; i < parts.length; i++) {
    if (isInCodeBlock) {
      const cleanedParts = parts[i]
        .replace("js", "")
        .replace("jsx", "")
        .replace("x", "")
        .replace("java", "")
        .replace("type", "")
        .replace("vue", "")
        .replace("script", "")
        .replace("typescript", "")
        .replace("javascript", "")
        .replace("html", "")
        .trim()

      result.push({ code: cleanedParts })
      isInCodeBlock = false
    } else {
      result.push({ text: parts[i] })
      isInCodeBlock = true
    }
  }
  return result
}
