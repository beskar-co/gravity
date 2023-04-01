const fs = require('fs');
const path = require('path');

const packageJsonPath = path.resolve(__dirname, '../package.json');
const packageJson = require(packageJsonPath);

const distFolderPath = path.resolve(__dirname, '../dist');

const componentFolders = fs.readdirSync(distFolderPath);

const exportsField = {};

componentFolders.forEach((componentFolder) => {
  const componentName = componentFolder;
  exportsField[`./${componentName}`] = {
    import: `./dist/${componentName}/index.js`,
    require: `./dist/${componentName}/index.js`,
    types: `./dist/${componentName}/index.d.ts`,
  };
});

packageJson.exports = exportsField;

fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
