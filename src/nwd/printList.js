import { readdir, stat } from "fs/promises";
import { resolve } from "path";
import { handleOperationError } from "../handleOperationError.js";

export const printList = async() => {
    const currentDir = process.cwd();
    const dirContents = await readdir(currentDir).catch(handleOperationError);
    
    try {
        const results = await Promise.all(dirContents.map(async (item) => {
            const contentPath = resolve(currentDir, item);
            const stats = await stat(contentPath);
            const type = stats.isDirectory() ? 'directory' : 'file';
            return ({
                name: item,
                type
            })
        }));
        const sortResults = results.sort((a, b) => {
            if (a.type === 'directory' && b.type === 'file') {
                return -1;
            } else if (a.type === b.type) {
                return a.name.localeCompare(b.name);
            }
        })
        console.table(sortResults.map(result => ({
            Name: result.name,
            Type: result.type
        })));
    } catch (err) {
        handleOperationError();
    }
}