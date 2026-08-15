import { runOperationSuite } from './operationSuite';
runOperationSuite({
	nodeDir: 'nodes/OvhCloudDbaas',
	resource: 'dbaas',
	operationParam: 'dbaasOperation',
	basePath: '/dbaas',
	listSearchMethods: [],
});
