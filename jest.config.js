module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	roots: ['<rootDir>/tests'],
	testMatch: ['**/*.test.ts'],
	moduleFileExtensions: ['ts', 'js', 'json'],
	collectCoverageFrom: [
		'nodes/OvhCloud/actions/vps/**/*.ts',
		'nodes/OvhCloud/transport/*.ts',
		'nodes/OvhCloud/OvhCloud.node.ts',
		'nodes/OvhCloud/actions/domain/*.operation.ts',
		'nodes/OvhCloud/actions/me/*.operation.ts',
		'!**/index.ts',
		'!**/*.d.ts',
	],
	globals: {
		'ts-jest': {
			isolatedModules: true,
		},
	},
};
