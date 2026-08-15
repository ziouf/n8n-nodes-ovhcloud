import { runOperationSuite } from './operationSuite';
runOperationSuite({
	nodeDir: 'nodes/OvhCloudEmailDomain',
	resource: 'emailDomain',
	operationParam: 'emailDomainOperation',
	basePath: '/email',
	listSearchMethods: ['getEmailDomains'],
});
