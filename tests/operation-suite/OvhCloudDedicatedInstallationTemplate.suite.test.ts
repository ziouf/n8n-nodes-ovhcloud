import { runOperationSuite } from './operationSuite';
runOperationSuite({
	nodeDir: 'nodes/OvhCloudDedicatedInstallationTemplate',
	resource: 'dedicatedInstallationtemplate',
	operationParam: 'dedicatedInstallationTemplateOperation',
	basePath: '/dedicated',
	listSearchMethods: [],
});
