import { printCWD } from './printCWD.js';
import { homedir } from 'os';

export const printWelcomeMsg = (userName) => {
    process.chdir(homedir());
    printCWD();
    process.stdout.write(`Welcome to the File Manager, ${userName}!\n`);
}