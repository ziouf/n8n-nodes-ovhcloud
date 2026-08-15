import { runOperationSuite } from './operationSuite';
runOperationSuite({
	nodeDir: 'nodes/OvhCloudZimbra',
	resource: 'zimbra',
	operationParam: 'zimbraOperation',
	basePath: '/zimbra',
	listSearchMethods: [],
});
