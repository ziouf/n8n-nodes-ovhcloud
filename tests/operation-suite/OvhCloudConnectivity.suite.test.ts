import { runOperationSuite } from './operationSuite';
runOperationSuite({
	nodeDir: 'nodes/OvhCloudConnectivity',
	resource: 'connectivity',
	operationParam: 'connectivityOperation',
	basePath: '/connectivity',
	listSearchMethods: [],
});
