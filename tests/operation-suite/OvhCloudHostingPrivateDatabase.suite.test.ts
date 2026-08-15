import { runOperationSuite } from './operationSuite';
runOperationSuite({
	nodeDir: 'nodes/OvhCloudHostingPrivateDatabase',
	resource: 'hostingPrivatedatabase',
	operationParam: 'hostingPrivateDatabaseOperation',
	basePath: '/hosting/privateDatabase',
	listSearchMethods: [],
});
