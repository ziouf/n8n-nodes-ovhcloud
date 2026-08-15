import { runOperationSuite } from './operationSuite';
runOperationSuite({
	nodeDir: 'nodes/OvhCloudCluster',
	resource: 'cluster',
	operationParam: 'clusterOperation',
	basePath: '/cluster',
	listSearchMethods: [],
});
