
import os from 'os';

export const getSystemInfo = () => {
    const cpus = os.cpus();
    const memoryInGB = (bytes) => (bytes / 1024 / 1024 / 1024).toFixed(2) + ' GB';

    console.log('🖥️ System Information');
    console.log('---------------------------');
    console.log(`🧱 Architecture      : ${os.arch()}`);
    console.log(`🧠 CPU Cores         : ${cpus.length}`);
    console.log(`⚙️ CPU Model         : ${cpus[0].model}`);
    console.log(`⏱️ CPU Speed         : ${cpus[0].speed} MHz`);
    console.log(`📦 Total Memory      : ${memoryInGB(os.totalmem())}`);
    console.log(`📭 Free Memory       : ${memoryInGB(os.freemem())}`);
    console.log(`📈 Heap Used         : ${memoryInGB(process.memoryUsage().heapUsed)}`);
    console.log(`🏷️ Hostname          : ${os.hostname()}`);
    console.log(`🧵 OS Type           : ${os.type()}`);
    console.log('---------------------------');
};
