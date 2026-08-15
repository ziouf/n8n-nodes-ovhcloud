import { runOperationSuite } from './operationSuite';
runOperationSuite({
	nodeDir: 'nodes/OvhCloudAuth',
	resource: 'auth',
	operationParam: 'authOperation',
	basePath: '/auth',
	listSearchMethods: [],
});
