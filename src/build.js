import { readFile, readdir, writeFile } from 'fs/promises';
import { join } from 'path';
import { dataHTML, indexHTML, noDataHTML } from './htmlMaker.js';
import { parse } from './parser.js';
import { calc } from './calc.js';

/* eslint-disable no-await-in-loop */

const DATA_DIR = './data';
const OUTPUT_DIR = './dist';

/**
 *
 * @param {String} file
 * @returns String with all contents of file
 */
export async function readDataFile(file) {
  let path = '';
  let data = Buffer;
  try {
    path = join(DATA_DIR, file)
    data = await readFile(path);

  } catch (e) {
    console.error(e);
  }
  return data.toString('utf-8');
}

async function main() {
  const files = await readdir(DATA_DIR);

  const dataCalcs = [];
  const noData = [];
  let dataCounter = 0;

  for (const file of files) {
    const content = await readDataFile(file);

    const parsed = parse(content);
    const dataset = file.split('.')[0];

    const calcs = calc(parsed);
    dataCalcs[dataCounter] = [calcs, dataset];
    dataCounter += 1;

    const filename = join(OUTPUT_DIR, `Dataset${dataset}.html`);
    let html = '';

    if (!parsed) {
      html = noDataHTML(dataset);
      noData.push(parseInt(dataset, 10));
    } else {
      html = dataHTML(calcs, dataset);
    }

    try {
      await writeFile(filename, html);
    } catch (e) {
      console.error(`Error:${e} occured writing file`);
    }
  }

  dataCalcs.sort((a, b) => a[1] - b[1]);
  noData.sort((a, b) => a - b);
  const index = indexHTML(dataCalcs, noData);

  try {
    await writeFile('./dist/index.html', index, { flag: 'w' });
  } catch (e) {
    console.error(`Error:${e} Failed to create index.html`);
  }

}

main().catch((err) => console.error(err));
