import { resolve } from "path";
import { printCWD } from "../printCWD.js";

export const goToFolder = (folderName) => {
    const currentDir = process.cwd();
    const folderPath = resolve(currentDir, folderName);
    process.chdir(folderPath);
    printCWD();
}