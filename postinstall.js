// const { writeFileSync } = require('fs');
// const { getByPage, getTokens, getValueFromFlatTokens, getNestedTokens } = require('@yummly/pasta-dictionary/src/index');

// const uids = ['E0003'];

// uids.forEach(uid => {
// 	const tokens = getByPage(getTokens(), uid);
//   const values = getValueFromFlatTokens(tokens);

// 	const meta = Object.entries(tokens)
// 		.filter(([key]) => key.startsWith('meta'))
// 		.reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});

//   const nestedMeta = getNestedTokens(meta, true);

// 	writeFileSync(`./docs/_data/${uid}.json`, JSON.stringify({ tokens: values, meta: nestedMeta.meta[uid] }, null, 2));
// });
