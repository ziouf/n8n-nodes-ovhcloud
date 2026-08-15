import { runOperationSuite } from './operationSuite';
runOperationSuite({
	nodeDir: 'nodes/OvhCloudServices',
	resource: 'services',
	operationParam: 'servicesOperation',
	basePath: '/services',
	listSearchMethods: [],
});
