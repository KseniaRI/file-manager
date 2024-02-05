import { createReadStream } from 'fs';
import { resolve } from 'path';

export const readAndPrint = async ([fileName]) => {
    if (!fileName) {
        console.log('Invalid input');
        return;
    }
    const filePath = resolve(process.cwd(), fileName);
    const readStream = createReadStream(filePath);

    readStream.on('error', async(err) => {
        console.log('Invalid input');
    }) 
    readStream.on('end', () => {
        console.log('\n'); 
    });

    readStream.pipe(process.stdout);
}