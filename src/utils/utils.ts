import { FileInput } from './types';

function createFileInput(isMultiple = false) {
  const fileInput = Object.assign(document.createElement('input'), {
    type: 'file',
    multiple: isMultiple,
    style: { display: 'hidden' },
  });

  document.body.appendChild(fileInput);
  return fileInput;
}

function createFilePromise(fileInput: FileInput): Promise<FileList | null> {
  return new Promise((resolve) => {
    fileInput.onchange = (event) => {
      const files = (event.target as HTMLInputElement).files;
      document.body.removeChild(fileInput);
      resolve(files);
    };
  });
}

export { createFileInput, createFilePromise };
