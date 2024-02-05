import { createReadStream, createWriteStream } from 'fs';
import { rm } from 'fs/promises';
import { resolve, basename } from 'path';
import { handleOperationError } from '../handleOperationError.js';

export const moveFile = async ([fileName, folderName]) => {
    if (!fileName || !folderName ) {
        console.log('Invalid input');
        return;
    } 
    const filePath = resolve(process.cwd(), fileName);
    const newFilePath = resolve(process.cwd(), folderName, basename(fileName));
  
    const readStream = createReadStream(filePath);
    const writeStream = createWriteStream(newFilePath);

    readStream.on('error', async(err) => {
        console.log('Invalid input');
    })  

    writeStream.on('error', async(err) => {
        console.log('Invalid input');
    });

    writeStream.on('finish', async (err) => {
        if (err) handleOperationError();
        await rm(filePath);
    })
    readStream.pipe(writeStream);
}