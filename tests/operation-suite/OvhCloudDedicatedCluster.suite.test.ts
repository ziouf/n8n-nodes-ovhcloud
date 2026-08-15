import { runOperationSuite } from './operationSuite';
runOperationSuite({
	nodeDir: 'nodes/OvhCloudDedicatedCluster',
	resource: 'dedicatedCluster',
	operationParam: 'dedicatedClusterOperation',
	basePath: '/dedicated',
	listSearchMethods: ['getDedicatedClusterServices'],
});
