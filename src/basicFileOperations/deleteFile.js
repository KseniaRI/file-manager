import { rm } from 'fs/promises';
import { resolve} from 'path';
import { handleOperationError } from '../handleOperationError.js';

export const deleteFile = async ([fileName]) => {
    if (!fileName) {
        console.log('Invalid input');
        return;
    } 
    const filePath = resolve(process.cwd(), fileName);
    await rm(filePath).catch(handleOperationError);   
}