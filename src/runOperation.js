import { createInterface } from "readline";
import { exitFromFM } from "./exitFromFM.js";
import { promptToPrintCommand } from "./promptToReadCommand.js";

export const runOperation = async(userName) => {
    const readLine = createInterface({
       input: process.stdin,
       output: process.stdout 
    });
    
    await promptToPrintCommand(readLine);

    readLine.on('line', (input) => {
        if (input.trim() === '.exit') {
            exitFromFM(userName);
        }
    });

    readLine.on('SIGINT', () => {
        exitFromFM(userName);
    });
}