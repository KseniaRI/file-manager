import { writeFile } from 'fs/promises';
import { resolve } from 'path';
import { handleOperationError } from '../handleOperationError.js';

export const createEmptyFile = async ([fileName]) => {
    if (!fileName) {
        console.log('Invalid input');
        return;
    } 
    const filePath = resolve(process.cwd(), fileName);
    await writeFile(filePath, '', { flag: 'wx' }).catch(handleOperationError());
}