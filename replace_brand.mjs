import fs from 'fs';
import glob from 'glob';

const files = glob.sync('src/**/*.{tsx,ts,json}');
let changedCount = 0;

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;

  // Replace varying case versions
  content = content.replace(/RevaCell/g, 'StemLink');
  content = content.replace(/REVACELL/g, 'STEMLINK');
  content = content.replace(/revacell/g, 'stemlink');
  // Handle RevaCall typo literal replacement requested
  content = content.replace(/RevaCall/g, 'StemLink');

  if (content !== originalContent) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
    changedCount++;
  }
}

console.log(`Finished updating ${changedCount} files.`);
