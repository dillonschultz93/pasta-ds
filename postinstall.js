const { writeFileSync } = require('fs');
const { getByPage, getTokens, getValueFromFlatTokens, getNestedTokens } = require('@yummly/pasta-dictionary/src/index');

const uids = ['E0002', 'E0003', 'E0004', 'F0002'];

uids.forEach(uid => {
	const tokens = getByPage(getTokens(), uid);
	const values = getValueFromFlatTokens(tokens);

	const hasVariants = Object.keys(values).some(key => key.includes('-'));
	const hasOptions = Object.keys(values).some(key => key.includes('OPT_'));
  const hasBreakpoints = Object.keys(values).some(key => key.includes('BRKP_'));

	// Collect metadata for each token
	const meta = Object.entries(tokens)
		.filter(([key]) => key.startsWith('meta'))
		.reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});

	const nestedMeta = getNestedTokens(meta, true);

	// Get the states of the passed token
	const splitByStates = (filteredValueTokens) => {
		return Object.entries(filteredValueTokens)
			.filter(
				([key]) =>
					key.includes('.i.') ||
					key.includes('.o.') ||
					key.includes('.p.') ||
					key.includes('.d.') ||
					key.includes('.f.') ||
					key.includes('.hi.') ||
					key.includes('.ho.') ||
					key.includes('.hp.') ||
					key.includes('.hd.') ||
					key.includes('.hf.')
			)
			.reduce((acc, [k, val]) => {
				const allKeys = k.split('.');
				const state = allKeys[allKeys.length - 2];

				return {
					...acc,
					[state]: [...(acc[state] || []), { [k]: val }],
				};
			}, {});
	};

	// Collect all variants for each token
	const splitByVariant = flatValuesTokensObj => {
		return Object.entries(flatValuesTokensObj)
			.filter(([key]) => key.includes('-'))
			.reduce((acc, [k, value]) => {
				const allKeys = k.split('.');
				const variant = allKeys[3].split('-')[1];

        const filteredTokens = {
          ...acc[variant],
          [k]: value,
        }

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

	writeFileSync(
		`./docs/_data/${uid}.json`,
		JSON.stringify(
			{
				allTokens: values,
				meta: nestedMeta.meta[uid],
				variants: hasVariants ? splitByVariant(values) : null,
				options: hasOptions ? splitByOptions(values) : null,
        breakpoints: hasBreakpoints ? splitByBreakpoints(values) : null,
			},
			null,
			2
		)
	);
});
