import { promises as fs } from 'fs';
import path from 'path'

export async function getLocalWords() {
    // Get the path of the json file
    const filePath = path.join(process.cwd(), 'json/word.json');
    // Read the json file
    const jsonData = await fs.readFile(filePath,'utf8');
    // Parse data as json
    return JSON.parse(jsonData)
}