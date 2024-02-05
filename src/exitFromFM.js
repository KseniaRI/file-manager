import { printCWD } from './printCWD.js';

export const exitFromFM = (name) => {
    process.stdout.write(`\nThank you for using File Manager, ${name}, goodbye!\n`);
    printCWD();
    process.exit();
}

   