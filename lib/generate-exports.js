const fs = require('fs');
const path = require('path');

const packageJsonPath = path.resolve(__dirname, '../package.json');
const packageJson = require(packageJsonPath);

const distFolderPath = path.resolve(__dirname, '../dist');

const componentFolders = fs.readdirSync(distFolderPath);

const exportsField = {};
const typesVersionsField = {
  '*': {},
};

componentFolders.forEach((componentFolder) => {
  const componentName = componentFolder.toLowerCase();
  exportsField[`./${componentName}`] = `./dist/${componentName}/index.js`;
  typesVersionsField['*'][`./${componentName}`] = [
    `./dist/${componentName}/index.d.ts`,
  ];
});

packageJson.exports = exportsField;
packageJson.typesVersions = typesVersionsField;

fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
