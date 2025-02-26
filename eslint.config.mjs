import { eslint } from '@siberiacancode/eslint';

export default eslint(
	{
		typescript: true,
		react: true,
		jsx: true,
	},
	{
		rules: {
			'node/prefer-global/process': 'off',
			'react-dom/no-missing-button-type': 'off',
			'siberiacancode-react/no-children-prop': 'off',
			'regexp/no-obscure-range': 'off',
			'react/no-context-provider': 'off',
			'react/no-array-index-key': 'off',
		},
	},
);
