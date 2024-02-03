import { printCWD } from './printCWD.js';

export const exitFromFM = (name) => {
    process.stdout.write(`Thank you for using File Manager, ${name}, goodbye!\n`);
    printCWD();
    process.exit();
}

   