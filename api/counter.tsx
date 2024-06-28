// api/counter.js
import fs from 'fs';
import path from 'path';

const filePath = path.join(__dirname, 'visits.json');

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    res.status(200).json({ visits: data.visits });
  } else if (req.method === 'POST') {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    data.visits += 1;
    fs.writeFileSync(filePath, JSON.stringify(data));
    res.status(200).json({ visits: data.visits });
  } else {
    res.status(405).end(); // Método não permitido
  }
}
