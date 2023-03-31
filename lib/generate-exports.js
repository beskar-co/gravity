const fs = require('fs');
const path = require('path');

const distPath = path.resolve(__dirname, 'dist');
const packageJsonPath = path.resolve(__dirname, 'package.json');
const packageJson = require(packageJsonPath);

function generateExports() {
  const exports = {
    './dist/*': './dist/*',
  };

  fs.readdirSync(distPath).forEach((dir) => {
    const dirPath = path.join(distPath, dir);
    const stat = fs.statSync(dirPath);

    if (stat.isDirectory()) {
      const indexPath = path.join(dirPath, 'index');
      exports[`./${dir}`] = `./dist/${dir}/index`;
    }
  });

  return exports;
}

packageJson.exports = generateExports();

fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
