import { serviceNameLocator } from '../../shared/nodes/locators';

export const SERVICE_NAME = serviceNameLocator({
	searchListMethod: 'getNetAppServices',
	displayName: 'NetApp Service Name',
	description: 'The NetApp service name (uuid), e.g. aaaa-bbbb-cccc-dddd',
	placeholder: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
});
