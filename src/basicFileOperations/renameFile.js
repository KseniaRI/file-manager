import { rename } from 'fs/promises';
import { resolve } from 'path';
import { handleOperationError } from '../handleOperationError.js';

export const renameFile = async ([fileName, newFileName]) => {
    if (!fileName || !newFileName ) {
        console.log('Invalid input');
        return;
    }
    const filePath = resolve(process.cwd(), fileName);
    const newFilePath = resolve(process.cwd(), newFileName);
    await rename(filePath, newFilePath).catch(handleOperationError);
}