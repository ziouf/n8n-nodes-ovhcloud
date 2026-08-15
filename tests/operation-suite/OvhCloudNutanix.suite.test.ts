import { runOperationSuite } from './operationSuite';
runOperationSuite({
	nodeDir: 'nodes/OvhCloudNutanix',
	resource: 'nutanix',
	operationParam: 'nutanixOperation',
	basePath: '/nutanix',
	listSearchMethods: ['getNutanixServices'],
});
