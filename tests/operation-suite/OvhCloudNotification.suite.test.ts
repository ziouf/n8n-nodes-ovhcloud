import { runOperationSuite } from './operationSuite';
runOperationSuite({
	nodeDir: 'nodes/OvhCloudNotification',
	resource: 'notification',
	operationParam: 'notificationOperation',
	basePath: '/notification',
	listSearchMethods: [],
});
