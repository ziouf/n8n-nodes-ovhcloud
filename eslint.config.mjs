import { configWithoutCloudSupport } from '@n8n/node-cli/eslint';
import tsEslint from 'typescript-eslint';

export default [
	{
		plugins: {
			'@typescript-eslint': tsEslint.plugin,
		},
		rules: {
			'@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
		},
	},
	...configWithoutCloudSupport,
	{
		files: ['tests/**/*.ts'],
		rules: {
			'import-x/no-unresolved': 'off',
		},
	},
];
