import fs from 'fs/promises';

const dbPath = './db.json';

export async function readTickets() {
  const data = await fs.readFile(dbPath, 'utf-8');
  return JSON.parse(data).tickets;
}

export async function writeTickets(tickets) {
  await fs.writeFile(dbPath, JSON.stringify({ tickets }, null, 2));
}
