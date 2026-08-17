import { serviceNameLocator } from '../../shared/nodes/locators';

export const SERVICE_NAME = serviceNameLocator({
	searchListMethod: 'getPublicCloudProjects',
	displayName: 'Service Name',
	description: 'The database service name',
	placeholder: '12345678-1234-1234-1234-1234567890ab',
});
