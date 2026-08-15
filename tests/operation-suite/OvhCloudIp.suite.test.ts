import { runOperationSuite } from './operationSuite';
runOperationSuite({
	nodeDir: 'nodes/OvhCloudIp',
	resource: 'ip',
	operationParam: 'ipOperation',
	basePath: '/ip',
	listSearchMethods: [],
});
