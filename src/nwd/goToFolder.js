import { resolve } from "path";
import { handleOperationError } from "../handleOperationError.js";
import { homedir } from "os";

export const goToFolder = ([folderName]) => {
     if (!folderName ) {
         console.log('Invalid input');
         return;
    }
    try {
        const currentDir = process.cwd();
        const folderPath = resolve(currentDir, folderName);
        if (!folderPath.startsWith(homedir())) {
            return;
        }
        process.chdir(folderPath);
    } catch (error) {
        handleOperationError();
    }
    
}