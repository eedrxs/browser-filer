import { createFileInput, createFilePromise } from "./utils/utils"

function readFile() {
  const fileInput = createFileInput()
  const filePromise = createFilePromise(fileInput)
  return filePromise
}

function readFiles() {
  const fileInput = createFileInput(true)
  const filePromise = createFilePromise(fileInput)
  return filePromise
}

export { readFile, readFiles }
