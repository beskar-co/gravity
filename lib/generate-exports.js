const fs = require('fs');
const path = require('path');

const distPath = path.resolve(__dirname, '../', 'dist');
const packageJsonPath = path.resolve(__dirname, '../', 'package.json');
const packageJson = require(packageJsonPath);

function generateExports() {
  const exports = {};

  fs.readdirSync(distPath).forEach((dir) => {
    const dirPath = path.join(distPath, dir);
    const stat = fs.statSync(dirPath);

    if (stat.isDirectory()) {
      exports[`./${dir}`] = `./dist/${dir}/index.js`;
    }
  });

  return exports;
}

packageJson.exports = generateExports();

fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
