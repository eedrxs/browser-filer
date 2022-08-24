type FileInput = HTMLInputElement & {
  type: string
  multiple: boolean
  style: {
    display: string
  }
}

function createFileInput(isMultiple = false) {
  const fileInput = Object.assign(document.createElement("input"), {
    type: "file",
    multiple: isMultiple,
    style: { display: "hidden" },
  })

  document.body.appendChild(fileInput)

  return fileInput
}

function createFilePromise(fileInput: FileInput) {
  return new Promise((resolve, reject) => {
    fileInput.onchange = (event) => {
      document.body.removeChild(fileInput)
      resolve(event.target)
    }

    fileInput.onerror = (event) => {
      document.body.removeChild(fileInput)
      reject(event)
    }
  })
}

export { createFileInput, createFilePromise }
