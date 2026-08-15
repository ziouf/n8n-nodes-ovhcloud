import { runOperationSuite } from './operationSuite';
runOperationSuite({
	nodeDir: 'nodes/OvhCloudNewAccount',
	resource: 'newaccount',
	operationParam: 'newAccountOperation',
	basePath: '/newAccount',
	listSearchMethods: [],
});
