import { runOperationSuite } from './operationSuite';
runOperationSuite({
	nodeDir: 'nodes/OvhCloudBackupServices',
	resource: 'backupservices',
	operationParam: 'backupServicesOperation',
	basePath: '/backupServices',
	listSearchMethods: [],
});
