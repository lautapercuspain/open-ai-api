export function getCodeGeniusPlaceHolder(mode: string) {
  if (mode === "smart") {
    return "Write your code idea here"
  } else if (mode === "test") {
    return "Paste the code and code Genius will provide unit tests"
  } else if (mode === "improve") {
    return "Paste the code and code Genius will provide code improvements"
  } else if (mode === "docs") {
    return "Paste your code here and Code Genius will document it for you"
  }
}
