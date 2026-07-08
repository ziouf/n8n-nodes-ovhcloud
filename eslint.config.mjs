import { configWithoutCloudSupport } from '@n8n/node-cli/eslint';

export default [
	...configWithoutCloudSupport,
	{
		files: ['tests/**/*.ts'],
		rules: {
			'import-x/no-unresolved': 'off',
		},
	},
];
