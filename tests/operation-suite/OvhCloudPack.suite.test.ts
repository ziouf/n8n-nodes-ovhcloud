import { runOperationSuite } from './operationSuite';
runOperationSuite({
	nodeDir: 'nodes/OvhCloudPack',
	resource: 'pack',
	operationParam: 'packOperation',
	basePath: '/pack',
	listSearchMethods: [],
});
