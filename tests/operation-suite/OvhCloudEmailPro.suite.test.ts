import { runOperationSuite } from './operationSuite';
runOperationSuite({
	nodeDir: 'nodes/OvhCloudEmailPro',
	resource: 'emailPro',
	operationParam: 'emailProOperation',
	basePath: '/email/pro',
	listSearchMethods: [],
});
