import { runOperationSuite } from './operationSuite';
runOperationSuite({
	nodeDir: 'nodes/OvhCloudClusterHadoop',
	resource: 'clusterHadoop',
	operationParam: 'clusterHadoopOperation',
	basePath: '/cluster',
	listSearchMethods: ['getClusterHadoopServices'],
});
