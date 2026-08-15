import { runOperationSuite } from './operationSuite';
runOperationSuite({
	nodeDir: 'nodes/OvhCloudLicense',
	resource: 'license',
	operationParam: 'licenseOperation',
	basePath: '/license',
	listSearchMethods: ['getWorkLightLicenses'],
});
