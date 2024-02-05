import { printCWD } from './printCWD.js';
import { homedir } from 'os';

export const printWelcomeMsg = (userName) => {
    process.chdir(homedir());
    process.stdout.write(`\nWelcome to the File Manager, ${userName}!\n`);
    printCWD();
}