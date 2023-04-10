const fs = require('fs');
const path = require('path');

const DIST_DIR = path.resolve(__dirname, '../dist');

function processFile(filepath) {
  const ext = path.extname(filepath);
  if (ext !== '.js' && ext !== '.mjs') {
    return; // only process .js and .mjs files
  }

  const contents = fs.readFileSync(filepath, 'utf8');
  if (!contents.includes('use client')) {
    return; // file does not contain "use client"
  }

  // move "use client" to top of file
  const lines = contents.split('\n');
  const useClientIndex = lines.findIndex((line) =>
    line.includes('"use client";')
  );
  if (useClientIndex === -1) {
    return; // should not happen, but just in case
  }
  const useClientLine = lines.splice(useClientIndex, 1)[0];
  lines.unshift(useClientLine);

  // write updated file contents
  const newContents = lines.join('\n');
  fs.writeFileSync(filepath, newContents, 'utf8');
}

function processDirectory(dir) {
  const filenames = fs.readdirSync(dir);
  filenames.forEach((filename) => {
    const filepath = path.join(dir, filename);
    const stat = fs.statSync(filepath);
    if (stat.isDirectory()) {
      processDirectory(filepath); // recursive call for nested directories
    } else {
      processFile(filepath);
    }
  });
}

processDirectory(DIST_DIR);
