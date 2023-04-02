const fs = require('fs');
const path = require('path');

const distFolder = 'dist';
const packagePath = path.join(__dirname, '../package.json');
const packageJSON = require(packagePath);

function generateExports() {
  const exports = {};

  fs.readdirSync(distFolder).forEach((dir) => {
    exports[`./${dir}`] = {
      import: `./dist/${dir}/index.mjs`,
      require: `./dist/${dir}/index.js`,
      types: `./dist/${dir}/index.d.ts`,
    };
  });

  return exports;
}

packageJSON.exports = generateExports();

fs.writeFileSync(packagePath, JSON.stringify(packageJSON, null, 2));
