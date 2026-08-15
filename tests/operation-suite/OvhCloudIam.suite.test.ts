import { runOperationSuite } from './operationSuite';
runOperationSuite({
	nodeDir: 'nodes/OvhCloudIam',
	resource: 'iam',
	operationParam: 'iamOperation',
	basePath: '/iam',
	listSearchMethods: [],
});
