import { runOperationSuite } from './operationSuite';
runOperationSuite({
	nodeDir: 'nodes/OvhCloudSsl',
	resource: 'ssl',
	operationParam: 'sslOperation',
	basePath: ['/ssl', '/webhosting'],
	listSearchMethods: ['getHostingWebServices'],
});
