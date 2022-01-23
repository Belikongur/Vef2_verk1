import { readFile, readdir } from 'fs/promises';


const DATA_DIR = './data';

async function main() {
    const files = await readdir(DATA_DIR);

    console.log("Files : " + files);

}

main().catch((err) => console.error(err));