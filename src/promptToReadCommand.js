import { goToParentDirectory } from './nwd/goToParentDirectory.js';
import { printList } from './nwd/printList.js';
import { goToFolder } from './nwd/goToFolder.js';
import { readAndPrint } from "./basicFileOperations/readAndPrint.js";
import { createEmptyFile } from "./basicFileOperations/createEmtyFile.js";
import { renameFile } from "./basicFileOperations/renameFile.js";
import { moveFile } from "./basicFileOperations/moveFile.js";
import { deleteFile } from "./basicFileOperations/deleteFile.js";
import { printCWD } from "./printCWD.js";
import { printOSInfo } from './osInfo/printOSInfo.js';
import { calculateHash } from './hashCalc/calculateHash.js';
import { compressFile } from './zip/compressFile.js';
import { decompressFile } from './zip/decompressFile.js';

export const promptToPrintCommand = async (readLine) => {
    readLine.prompt();
    readLine.on('line', async(command) => {
        const [action, ...parameter] = command.split(' ');
        switch (action.toLowerCase()) {
            case 'up': 
                goToParentDirectory();
                break;
            case 'cd':
                goToFolder(parameter);
                break;
            case 'list':
                await printList();
                break;
            case 'cat':
                await readAndPrint(parameter);
                break;
            case 'add':
                await createEmptyFile(parameter);
                break;
            case 'rn':
                await renameFile(parameter);
                break;
            case 'mv':
                await moveFile(parameter);
                break;
            case 'rm':
                await deleteFile(parameter);
                break;
            case 'os':
                await printOSInfo(parameter);
                break;
            case 'hash':
                await calculateHash(parameter);
                break;
            case 'compress':
                await compressFile(parameter);
                break;
            case 'decompress':
                await decompressFile(parameter);
                break;
            default:
                console.log('Invalid input.');
        }
        printCWD();
        readLine.prompt();
    })
}
