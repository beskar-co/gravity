const fs = require('fs');
const path = require('path');

const distFolder = 'dist';
const packagePath = path.join(__dirname, '../package.json');
const newPackagePath = path.join(__dirname, '../dist/package.json');
const packageJSON = require(packagePath);

const newPackageJSON = {
  name: packageJSON.name,
  description: packageJSON.description,
  version: packageJSON.version,
  author: packageJSON.author,
  repository: packageJSON.repository,
  license: packageJSON.license,
  dependencies: packageJSON.dependencies,
  peerDependencies: packageJSON.peerDependencies,
  type: 'module',
  files: ['*'],
  sideEffects: false,
  exports: fs.readdirSync(distFolder).map((dir) => ({
    [`./${dir}`]: {
      import: `./${dir}/index.mjs`,
      require: `./${dir}/index.js`,
      types: `./${dir}/index.d.ts`,
    },
  })),
};

fs.writeFileSync(newPackagePath, JSON.stringify(newPackageJSON, null, 2));

/* Copy static files */
const staticFiles = ['CHANGELOG.md', 'README.md', 'yarn.lock'];
staticFiles.forEach((file) => {
  const source = path.resolve(file);
  const target = path.resolve(`../dist/${file}`);

  fs.copyFileSync(source, target);
});
