import { runOperationSuite } from './operationSuite';
runOperationSuite({
	nodeDir: 'nodes/OvhCloudMxPlan',
	resource: 'emailMxplan',
	operationParam: 'mxPlanOperation',
	basePath: '/email/mxplan',
	listSearchMethods: [],
});
