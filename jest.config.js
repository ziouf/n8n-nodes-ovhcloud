module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	roots: ['<rootDir>/tests', '<rootDir>/nodes'],
	testMatch: ['<rootDir>/tests/**/*.test.ts', '<rootDir>/nodes/**/*operation.spec.ts'],
	moduleFileExtensions: ['ts', 'js', 'json'],
	transform: {
		'^.+\\.ts$': [
			'ts-jest',
			{
				isolatedModules: true,
			},
		],
	},
	collectCoverageFrom: [
		'shared/**/*.ts',
		'credentials/**/*.ts',
		'nodes/**/*.operation.ts',
		'nodes/**/index.ts',
		'nodes/**/*.node.ts',
		'!**/node_modules/**',
		'!**/*.d.ts',
	],
	coverageThreshold: {
		global: {
			branches: 80,
			functions: 80,
			lines: 80,
			statements: 80,
		},
	},
};
