import { runOperationSuite } from './operationSuite';
runOperationSuite({
	nodeDir: 'nodes/OvhCloudVmwareCloudDirector',
	resource: 'vmwareclouddirector',
	operationParam: 'vcdOperation',
	basePath: '/vmwareCloudDirector',
	listSearchMethods: [],
});
