import { runOperationSuite } from './operationSuite';
runOperationSuite({
	nodeDir: 'nodes/OvhCloudMetrics',
	resource: 'metrics',
	operationParam: 'metricsOperation',
	basePath: '/metrics',
	listSearchMethods: ['getMetricsServices'],
});
