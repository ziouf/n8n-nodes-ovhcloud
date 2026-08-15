import { runOperationSuite } from './operationSuite';
runOperationSuite({
	nodeDir: 'nodes/OvhCloudDomain',
	resource: 'domain',
	operationParam: 'domainOperation',
	basePath: '/domain',
	listSearchMethods: ['getDomainNames'],
	skipFiles: [
		// Generated bug: two top-level description properties are both named
		// 'domain' (lines 29 and 46) — n8n cannot render a duplicated property name.
		'nodes/OvhCloudDomain/resources/root/domainConfigurationRuleCheckPost.operation.ts',
	],
});
