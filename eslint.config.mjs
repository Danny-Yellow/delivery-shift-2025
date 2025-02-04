import { eslint } from '@siberiacancode/eslint';

export default eslint(
	{
		typescript: true,
		react: true,
		jsx: true,
	},
	{
		name: 'node',
		rules: {
			'node/prefer-global/process': 'off',
		},
	},
);
