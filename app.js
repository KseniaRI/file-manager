import { runOperation } from "./src/runOperation.js";
import { printWelcomeMsg } from "./src/printWelcomeMsg.js";

const runFileManager = () => {
    const [exeArg, appArg, userNameArg] = process.argv;
    let userName = 'guest';
    if (userNameArg) {
        const parsedUserName = userNameArg.replace('--username=', '');
        if (parsedUserName !== '' && parsedUserName !== 'your_username') {
            userName = parsedUserName;
        }
    }
    printWelcomeMsg(userName);
    runOperation(userName);
}

runFileManager();

