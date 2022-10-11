const { writeFileSync, readdirSync, mkdirSync } = require('fs');
const flatTokens = require('@yummly/pasta-dictionary/dist/FFL/knowledge-base/flat-tokens.json');
const pageInfo = require('@yummly/pasta-dictionary/dist/FFL/knowledge-base/pageInfo.json');
// const tokens = require('@yummly/pasta-dictionary/dist/FFL/knowledge-base/tokens.json');

const uids = ['E0002', 'E0003', 'E0004', 'F0002'];

const getByPage = (tokenset, UID) =>
	Object.entries(tokenset)
		.filter(([key]) => key.includes(UID))
		.reduce(
			(acc, [key, val]) => ({
				...acc,
				[key]: val,
			}),
			{}
		);

uids.forEach(UID => {
	const tokens = getByPage(flatTokens, UID);

	const hasVariants = Object.keys(tokens).some(key => key.includes('-'));
	const hasOptions = Object.keys(tokens).some(key => key.includes('OPT_'));
	const hasBreakpoints = Object.keys(tokens).some(key => key.includes('BRKP_'));

	// Collect the page info for each UID
	const info = pageInfo.pageInfo[UID];

	// Collect all variants for each token
	const splitByVariant = flatValuesTokensObj => {
		return Object.entries(flatValuesTokensObj)
			.filter(([key]) => key.includes('-'))
			.reduce((acc, [k, value]) => {
				const allKeys = k.split('.');
				const variant = allKeys[3].split('-')[1];

				return {
					...acc,
					[variant]: {
						...acc[variant],
						[k]: value,
					},
				};
			}, {});
	};

	const splitByOptions = flatValuesTokensObj => {
		return Object.entries(flatValuesTokensObj)
			.filter(([key]) => key.includes('OPT_'))
			.reduce((acc, [key, value]) => {
				const allKeys = key.split('.');
				const option = allKeys[4];

				return {
					...acc,
					[option]: {
						...acc[option],
						[key]: value,
					},
				};
			}, {});
	};

	const splitByBreakpoints = flatValuesTokensObj => {
		return Object.entries(flatValuesTokensObj)
			.filter(([key]) => key.includes('BRKP_'))
			.reduce((acc, [key, value]) => {
				const allKeys = key.split('.');
				const breakpoint = allKeys[allKeys.length - 2];

				return {
					...acc,
					[breakpoint]: {
						...acc[breakpoint],
						[key]: value,
					},
				};
			}, {});
	};

	// Create a directory for each UID
	readdirSync('./node_modules/@yummly/pasta-dictionary/dist/').forEach(project => {
		mkdirSync(`./docs/_data/${project}`, { recursive: true });

		// Write the tokens to a JSON file
		writeFileSync(
			`./docs/_data/${project}/${UID}.json`,
			JSON.stringify(
				{
					allTokens: tokens,
					meta: info,
          variants: hasVariants ? splitByVariant(tokens) : null,
				  options: hasOptions ? splitByOptions(tokens) : null,
				  breakpoints: hasBreakpoints ? splitByBreakpoints(tokens) : null,
				},
				null,
				2
			)
		);
	});
});
