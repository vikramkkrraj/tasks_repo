
import { readFileData, appendFileData } from './fileOperations.js';

readFileData();

appendFileData();


setTimeout(() => {
    readFileData();
}, 1000);  