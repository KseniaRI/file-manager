import { EOL, cpus, homedir, userInfo } from 'os';

export const printOSInfo = async([info]) => {
    if (!info) {
        console.log('Invalid input');
        return;
    }
    const parameter = info.replace('--', '');
    const cpusArr = cpus();
    const cpusParsed = cpusArr.map((cpu, index) => {
        return `CPU-${index+1}: ${cpu.model}; ${(cpu.speed / 1000).toFixed(1)} GHz`
    })
    switch (parameter) {
        case 'EOL':
            process.stdout.write(JSON.stringify(EOL));
            break;
        case 'homedir':
            process.stdout.write(homedir());
            break;
        case 'username':
            process.stdout.write(userInfo().username);
            break;
        case 'architecture':
            process.stdout.write(process.arch);
            break;
        case 'cpu':
            cpusParsed.forEach(cpuInfo => console.log(cpuInfo));
            break;
        default:
            console.log('Invalid input.');
    }
}