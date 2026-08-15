import { runOperationSuite } from './operationSuite';
runOperationSuite({
	nodeDir: 'nodes/OvhCloudHosting',
	resource: 'hosting',
	operationParam: 'hostingOperation',
	basePath: ['/hosting', '/webhosting'],
	listSearchMethods: ['getHostingWebServices'],
});
