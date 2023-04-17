const fs = require('fs');
const path = require('path');

// Define the source and destination directories
const sourceDir = path.join(__dirname, '../');
const destDir = path.join(__dirname, '../dist');

// Define the filenames of the files to copy
const filenames = [
  'README.md',
  'CHANGELOG.md',
  'package.json',
  'yarn.lock',
  'tsconfig.json',
];

// Make sure the destination directory exists
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir);
}

// Loop through the filenames and copy each file
filenames.forEach((filename) => {
  const sourcePath = path.join(sourceDir, filename);
  const destPath = path.join(destDir, filename);

  fs.copyFileSync(sourcePath, destPath);
  console.log(`Copied ${filename} to ${destDir}`);
});
