export const printCWD = () => {
    process.stdout.write(`\nYou are currently in ${process.cwd()}\n`);
}