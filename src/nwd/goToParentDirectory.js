import { homedir } from "os";
import { printCWD } from "../printCWD.js";

export const goToParentDirectory = () => {
    const currentDir = process.cwd();
    const homeDir = homedir();
    if (currentDir !== homeDir) {
       process.chdir(resolve(currentDir, '..'));
    } 
    printCWD();
}