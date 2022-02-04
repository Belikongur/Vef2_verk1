import { expect, test } from '@jest/globals';
import { readDataFile } from '../build.js';


test('Reads file from directory returns string', async () => {
  const data = await readDataFile('1.txt');
  expect(data).toBe(`688
904
607
299`);
});
