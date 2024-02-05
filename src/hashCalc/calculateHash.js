import { createHash } from 'crypto';
import { createReadStream } from 'fs';
import { resolve } from 'path';

export const calculateHash = async ([fileName]) => {
    if (!fileName) {
        console.log('Invalid input');
        return;
    }
    const filePath = resolve(process.cwd(), fileName); 
    const hash = createHash('sha256');
    const readStream = createReadStream(filePath);

    readStream.on('readable', () => {
        const data = readStream.read();
        if (data)
           hash.update(data);
        else {
            process.stdout.write(hash.digest('hex'));
        }
    });

    readStream.on('error', async(err) => {
        console.log('Invalid input');
    })

    readStream.on('end', () => {
        console.log('\n'); 
    });
}