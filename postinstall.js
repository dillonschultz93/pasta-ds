const { readdirSync, copyFileSync, mkdirSync } = require('fs');

// Get the json files from the @yummly/pasta-dictionary package and move them to the _data directory
const projectDirectories = readdirSync('./node_modules/@yummly/pasta-dictionary/dist');

projectDirectories.forEach((project) => {

  mkdirSync(`./docs/_data/${project}`, { recursive: true });

  const tokenFiles = readdirSync(`./node_modules/@yummly/pasta-dictionary/dist/${project}/knowledge-base`);

  tokenFiles.forEach((tokenFile) => {
    copyFileSync(`./node_modules/@yummly/pasta-dictionary/dist/${project}/knowledge-base/${tokenFile}`, `./docs/_data/${project}/${tokenFile}`);
  });
});
