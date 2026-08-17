import { serviceNameLocator } from '../../shared/nodes/locators';

export const SERVICE_NAME = serviceNameLocator({
	searchListMethod: 'getDedicatedNashaServices',
	displayName: 'Servicename',
	description: 'The internal name of your storage',
});
