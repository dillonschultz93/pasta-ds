const { writeFileSync } = require('fs')
const { getByPage, getFlattened, getValueFromFlatTokens } = require('@yummly/pasta-dictionary')

const tokens = getFlattened(); //?

getValueFromFlatTokens(getByPage(tokens, 'E0003')) //?

const uids = ['E0003'];

uids.forEach(uid => {
    const tokens = getByPage(getFlattened(), uid);
    const values = Object.entries(
        getValueFromFlatTokens(tokens)
    ).map(([key, value]) => ({[key.split('-').slice(1).join('-')]: value}))
    .reduce((acc, curr) => ({...acc, ...curr}), {});

    console.log(values)
    
    writeFileSync(`./docs/_data/${uid}.json`, JSON.stringify(values, null, 2));
})