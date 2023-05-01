export function getCodeGeniusPlaceHolder(mode: string) {
  switch (mode) {
    case "smart":
      return "Write your code idea here"
    case "test":
      return "Paste the code and code Genius will provide unit tests"
    case "improve":
      return "Paste the code and code Genius will provide code improvements"
    case "docs":
      return "Paste your code here and Code Genius will document it for you"
    default:
      return ""
  }
}
