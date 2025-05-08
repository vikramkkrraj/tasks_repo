// read.js
import { readFileSync } from 'fs';

export function readDataFile() {
  try {
    const data = readFileSync('./Data.txt', 'utf8');
    return data;
  } catch (err) {
    return 'Error reading file.';
  }
}
