import { runOperationSuite } from './operationSuite';
runOperationSuite({
	nodeDir: 'nodes/OvhCloudOkms',
	resource: 'okms',
	operationParam: 'okmsOperation',
	basePath: '/okms',
	listSearchMethods: [],
});
