import { runOperationSuite } from './operationSuite';
runOperationSuite({
	nodeDir: 'nodes/OvhCloudMsServices',
	resource: 'msservices',
	operationParam: 'msServicesOperation',
	basePath: '/msServices',
	listSearchMethods: [],
});
