import { serviceNameLocator } from '../../shared/nodes/locators';

export const SERVICE_NAME = serviceNameLocator({
	searchListMethod: 'getVpsServices',
	displayName: 'VPS Service Name',
	description: 'The VPS service name (e.g. vps1234567.ovh.net)',
	placeholder: 'vps1234567.ovh.net',
});
