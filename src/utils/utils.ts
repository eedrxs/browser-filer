function createFileInput(isMultiple = false): HTMLInputElement {
  const fileInput = document.createElement('input');
  fileInput.type = 'file';
  fileInput.multiple = isMultiple;
  fileInput.style.display = 'hidden';

  document.body.appendChild(fileInput);
  fileInput.click();
  return fileInput as HTMLInputElement;
}

function createFilePromise(fileInput: HTMLInputElement): Promise<FileList | null> {
  return new Promise((resolve) => {
    fileInput.onchange = (event) => {
      const files = (event.target as HTMLInputElement).files;
      document.body.removeChild(fileInput);
      resolve(files);
    };
  });
}

export { createFileInput, createFilePromise };
