import { createInterface } from "readline";
import { goToParentDirectory } from './nwd/goToParentDirectory.js';
import { printList } from './nwd/printList.js';
import { goToFolder } from './nwd/goToFolder.js';
import { exitFromFM } from "./exitFromFM.js";

export const runOperation = (userName) => {
     const rl = createInterface({
        input: process.stdin,
        output: process.stdout 
    });

    rl.question('Print command and wait for result\n', (command) => {
        const [action, parameter] = command.split(' ');
        switch (action.toLowerCase()) {
            case 'up':
                goToParentDirectory();
                break;
            case 'cd':
                goToFolder(parameter);
                break;
            case 'list':
                printList();
        }
    })

    rl.on('line', (input) => {
        if (input.trim() === '.exit') {
            exitFromFM(userName);
        }
    });

    rl.on('SIGINT', () => {
        exitFromFM(userName);
    });
}