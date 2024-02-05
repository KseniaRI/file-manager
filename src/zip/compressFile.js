import { createBrotliCompress } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream';
import { resolve } from 'path';
import { handleOperationError } from '../handleOperationError.js';

export const compressFile = async([fileName, destinationName]) => {
    if (!fileName || !destinationName) {
        console.log('Invalid input');
        return;
    }
    const filePath = resolve(process.cwd(), fileName);
    const destinationPath = resolve(process.cwd(), destinationName); 
    
    const brotliZip = createBrotliCompress();
    const writeStream = createReadStream(filePath);
    const readStream = createWriteStream(destinationPath);

    writeStream.on('error', async(err) => {
        console.log('Invalid input');
    });

    readStream.on('error', async(err) => {
          console.log('Invalid input');
    })  

    pipeline(writeStream, brotliZip, readStream, (err) => {
        if (err) {
            handleOperationError();
        }
    });
}