import { runOperationSuite } from './operationSuite';
runOperationSuite({
	nodeDir: 'nodes/OvhCloudService',
	resource: 'service',
	operationParam: 'serviceOperation',
	basePath: '/service',
	listSearchMethods: [],
});
