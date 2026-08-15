import { runOperationSuite } from './operationSuite';
runOperationSuite({
	nodeDir: 'nodes/OvhCloudVeeamCloudConnect',
	resource: 'veeamcloudconnect',
	operationParam: 'veeamCloudConnectOperation',
	basePath: '/veeamCloudConnect',
	listSearchMethods: ['getVeeamCloudConnectServices'],
});
