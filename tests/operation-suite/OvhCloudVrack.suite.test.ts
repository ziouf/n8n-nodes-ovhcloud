import { runOperationSuite } from './operationSuite';
runOperationSuite({
	nodeDir: 'nodes/OvhCloudVrack',
	resource: 'vrack',
	operationParam: 'vrackOperation',
	basePath: '/vrack',
	listSearchMethods: [],
});
