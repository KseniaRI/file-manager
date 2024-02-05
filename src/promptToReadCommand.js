import { goToParentDirectory } from './nwd/goToParentDirectory.js';
import { printList } from './nwd/printList.js';
import { goToFolder } from './nwd/goToFolder.js';
import { readAndPrint } from "./basicFileOperations/readAndPrint.js";
import { createEmptyFile } from "./basicFileOperations/createEmtyFile.js";
import { renameFile } from "./basicFileOperations/renameFile.js";
import { moveFile } from "./basicFileOperations/moveFile.js";
import { deleteFile } from "./basicFileOperations/deleteFile.js";
import { printCWD } from "./printCWD.js";

export const promptToPrintCommand = async(readLine) => {
        readLine.question('\nPrint command and wait for result:\n', async(command) => {
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
            default:
                console.log('Invalid input.');
        }
        printCWD();
        await promptToPrintCommand(readLine);
    })
}
