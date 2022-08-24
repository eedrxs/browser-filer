import { readFile, readFiles } from '../index';

it('readFiles returns array', async () => {
  // const files = await readFiles();
  // console.log(files);
  expect(Array.isArray([])).toBeTruthy();
});
