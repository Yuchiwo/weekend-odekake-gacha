
const fs = require('fs');
const path = require('path');

// Helper to extract array content from file string
function extractArrayContent(fileContent) {
    const match = fileContent.match(/\[([\s\S]*)\]/);
    return match ? match[1] : '';
}

const part1Path = path.join(__dirname, 'src/data/tmp_spots_part1.ts');
const part2Path = path.join(__dirname, 'src/data/tmp_spots_part2.ts');
const part3Path = path.join(__dirname, 'src/data/tmp_spots_part3.ts');
const targetPath = path.join(__dirname, 'src/data/mockSpots.ts');

try {
    const part1 = fs.readFileSync(part1Path, 'utf8');
    const part2 = fs.readFileSync(part2Path, 'utf8');
    const part3 = fs.readFileSync(part3Path, 'utf8');

    const content1 = extractArrayContent(part1);
    const content2 = extractArrayContent(part2);
    const content3 = extractArrayContent(part3);

    // Combine
    // Note: The extraction keeps trailing commas, so we just concatenate
    const combinedContent = `import { Spot } from '../types';

export const mockSpots: Spot[] = [
${content1},${content2},${content3}
];
`;

    fs.writeFileSync(targetPath, combinedContent);
    console.log('Successfully merged mockSpots.ts');

} catch (err) {
    console.error('Error merging files:', err);
    process.exit(1);
}
