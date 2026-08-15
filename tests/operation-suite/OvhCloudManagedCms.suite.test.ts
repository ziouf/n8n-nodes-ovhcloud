import { runOperationSuite } from './operationSuite';
runOperationSuite({
	nodeDir: 'nodes/OvhCloudManagedCms',
	resource: 'managedcms',
	operationParam: 'managedCmsOperation',
	basePath: '/managedCMS',
	listSearchMethods: [],
});
