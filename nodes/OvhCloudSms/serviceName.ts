import { serviceNameLocator } from '../../shared/nodes/locators';

export const SERVICE_NAME = serviceNameLocator({
	searchListMethod: 'getSmsServices',
	displayName: 'Service Name',
	description: 'The internal name of your SMS offer',
	placeholder: 'sms-XXXXXX-1',
});

export const SERVICE_NAME_2 = serviceNameLocator({
	searchListMethod: 'getSmsServices',
	displayName: 'Service Name',
	description: 'The SMS service name',
	placeholder: 'sms-XXXXXX-1',
});
