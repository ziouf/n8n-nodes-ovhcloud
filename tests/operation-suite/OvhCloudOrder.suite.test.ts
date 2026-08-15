import { runOperationSuite } from './operationSuite';
runOperationSuite({
	nodeDir: 'nodes/OvhCloudOrder',
	resource: 'order',
	operationParam: 'orderOperation',
	basePath: '/order',
	listSearchMethods: [],
});
