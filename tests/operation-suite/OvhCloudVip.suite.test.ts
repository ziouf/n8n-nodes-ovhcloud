import { runOperationSuite } from './operationSuite';

runOperationSuite({
	nodeDir: 'nodes/OvhCloudVip',
	resource: 'vip',
	operationParam: 'vipOperation',
	basePath: '/vip',
	listSearchMethods: ['getVipServices'],
});
