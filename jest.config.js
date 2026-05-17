module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	roots: ['<rootDir>/tests'],
	testMatch: ['**/*.test.ts'],
	moduleFileExtensions: ['ts', 'js', 'json'],
	collectCoverageFrom: [
		'shared/**/*.ts',
		'credentials/**/*.ts',
		'nodes/**/*.operation.ts',
		'nodes/**/index.ts',
		'!**/node_modules/**',
		'!**/*.d.ts',
	],
	globals: {
		'ts-jest': {
			isolatedModules: true,
		},
	},
};
