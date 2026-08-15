import { runOperationSuite } from './operationSuite';
runOperationSuite({
	nodeDir: 'nodes/OvhCloudStorage',
	resource: 'storageNetapp',
	operationParam: 'storageOperation',
	basePath: '/storage/netapp',
	listSearchMethods: ['getNetAppServices'],
});
