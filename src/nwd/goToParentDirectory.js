import { homedir } from "os";
import { resolve } from "path";

export const goToParentDirectory = () => {
    const currentDir = process.cwd();
    const homeDir = homedir();
    if (currentDir !== homeDir) {
       process.chdir(resolve(currentDir, '..'));
    } 
}