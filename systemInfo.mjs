import os from 'os';
import { bytesToSize } from './FreeMemory.mjs';

console.log('System Information:');
console.log(`Operating System: ${os.type()} (${os.platform()} ${os.release()})`);
console.log(`Free Memory: ${bytesToSize(os.freemem())}`);
console.log(`Total Memory: ${bytesToSize(os.totalmem())}`);
