import { runOperationSuite } from './operationSuite';
runOperationSuite({
	nodeDir: 'nodes/OvhCloudDedicatedHousing',
	resource: 'dedicatedHousing',
	operationParam: 'dedicatedHousingOperation',
	basePath: '/dedicated/housing',
	listSearchMethods: ['getDedicatedHousingServices'],
});
