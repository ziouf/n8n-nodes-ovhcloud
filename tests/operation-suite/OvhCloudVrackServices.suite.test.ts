import { runOperationSuite } from './operationSuite';
runOperationSuite({
	nodeDir: 'nodes/OvhCloudVrackServices',
	resource: 'vrackservices',
	operationParam: 'vrackServicesOperation',
	basePath: '/vrackServices',
	listSearchMethods: [],
});
