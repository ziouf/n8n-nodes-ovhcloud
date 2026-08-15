import { runOperationSuite } from './operationSuite';
runOperationSuite({
	nodeDir: 'nodes/OvhCloudEmailPro',
	resource: 'emailPro',
	operationParam: 'emailProOperation',
	basePath: '/email/pro',
	listSearchMethods: [],
	skipFiles: [
		// Hand-written outlier (not generated): bare resourceLocator without
		// required/modes/displayOptions — cannot satisfy the description invariants.
		'nodes/OvhCloudEmailPro/resources/getByServiceNameGet.operation.ts',
	],
});
