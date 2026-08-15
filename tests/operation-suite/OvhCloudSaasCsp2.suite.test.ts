import { runOperationSuite } from './operationSuite';
runOperationSuite({
	nodeDir: 'nodes/OvhCloudSaasCsp2',
	resource: 'saasCsp2',
	operationParam: 'saasCsp2Operation',
	basePath: '/saas',
	listSearchMethods: ['getSaasCsp2Services'],
});
