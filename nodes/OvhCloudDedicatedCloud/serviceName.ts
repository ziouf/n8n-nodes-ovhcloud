import { serviceNameLocator } from '../../shared/nodes/locators';

export const SERVICE_NAME = serviceNameLocator({
	searchListMethod: 'getDedicatedCloudServices',
	displayName: 'Service Name',
	description: 'Domain of the service',
	placeholder: '12345678-1234-1234-1234-1234567890ab',
});

export const SERVICE_NAME_2 = serviceNameLocator({
	searchListMethod: 'getDedicatedCloudServices',
	displayName: 'Service Name',
	description: 'The name/ID of the VMware on OVHcloud infrastructure',
	placeholder: '12345678-1234-1234-1234-1234567890ab',
});
