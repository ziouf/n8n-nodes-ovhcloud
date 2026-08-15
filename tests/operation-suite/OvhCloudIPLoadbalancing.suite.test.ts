import { runOperationSuite } from './operationSuite';
runOperationSuite({
	nodeDir: 'nodes/OvhCloudIPLoadbalancing',
	resource: 'iploadbalancing',
	operationParam: 'ipLoadbalancingOperation',
	basePath: '/ipLoadbalancing',
	listSearchMethods: [],
});
