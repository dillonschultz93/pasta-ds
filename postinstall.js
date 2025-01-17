const { readdirSync, mkdirSync, writeFileSync } = require('fs');

// Get the json files from the @yummly/pasta-dictionary package and move them to the _data directory
const projectDirectories = readdirSync('./node_modules/@yosi_/ypl-dictionary/dist');

projectDirectories.forEach((project) => {

  mkdirSync(`./docs/_data/${project}`, { recursive: true });

  const tokenFiles = readdirSync(`./node_modules/@yosi_/ypl-dictionary/dist/${project}/knowledge-base`);

  tokenFiles.forEach((tokenFile) => {
    const file = require(`./node_modules/@yosi_/ypl-dictionary/dist/${project}/knowledge-base/${tokenFile}`);
    const tokens = file._tokens;

    // Loop through each token object and write it to a file
    Object.keys(tokens).forEach((token) => {
      const tokenObject = tokens[token];
      writeFileSync
      (`./docs/_data/${project}/${token}.json`, JSON.stringify(tokenObject, null, 2));
    });
  });
});
