const { writeFileSync } = require('fs');
const { getByPage, getTokens, getValueFromFlatTokens, getNestedTokens } = require('@yummly/pasta-dictionary/src/index');

const uids = ['E0003', 'E0004'];

uids.forEach(uid => {
	const tokens = getByPage(getTokens(), uid);
  const values = getValueFromFlatTokens(tokens);

  const hasVariants = Object.keys(values).some(key => key.includes('-'));

  // Collect metadata for each token
	const meta = Object.entries(tokens)
		.filter(([key]) => key.startsWith('meta'))
		.reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});

  const nestedMeta = getNestedTokens(meta, true);

  // Collect all variants for each token
  const splitByVariant = Object.entries(values)
    .filter(([key]) => key.includes('-'))
    .reduce((acc, [key, value]) => {
      const allKeys = key.split('.');
      const variant = allKeys[3].split('-')[1];

      return {
        ...acc,
        [variant]: {
          ...acc[variant],
          [key]: value
        }
      };
    }, {});

	writeFileSync(`./docs/_data/${uid}.json`, JSON.stringify({ 
    allTokens: values,
    meta: nestedMeta.meta[uid],
    variants: hasVariants ? splitByVariant : null,
   }, null, 2));
});
