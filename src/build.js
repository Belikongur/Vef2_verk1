import { readFile, readdir, writeFile } from 'fs/promises';


const DATA_DIR = './data';

async function main() {
    const files = await readdir(DATA_DIR);

    console.log("Files : " + files);
    // Búa til Grunnsíðu index.html
    const filename = 'index.html';
    const indexSite = `<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width,initial-scale=1">
        <title>${filename}</title>
        <!-- Stylesheets -->
        <link rel="stylesheet" href="styles.css" type="text/css">
        <link rel="stylesheet" href="grid-overlay.css" type="text/css">
    </head>
    <body>
    <h1>Gagnavinnsla</h1>
    </body>
</html>
`;
    try {
        const result = await writeFile(`./dist/${filename}`, indexSite, { flag: 'w' });
    }catch(e) {
        console.error(`Failed to create ${index.html}`, e);
    }
    // Búa til linka á hvert einasta dataset

    // Sannreyna gögnin og lagfæra

    // Búa til datatable með gögnum úr data möppu
    
    

}

main().catch((err) => console.error(err));