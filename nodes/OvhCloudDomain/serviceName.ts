import { serviceNameLocator } from '../../shared/nodes/locators';

export const SERVICE_NAME = serviceNameLocator({
	searchListMethod: 'getDomainNames',
	displayName: 'Service Name',
	description: 'The service name',
	placeholder: 'example.com',
});
