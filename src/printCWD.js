export const printCWD = () => {
    process.stdout.write(`You are currently in ${process.cwd()}\n`);
}