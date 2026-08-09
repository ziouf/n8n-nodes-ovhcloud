import type {
	IDataObject,
	IExecuteFunctions,
	INodeExecutionData,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description() {
	return [
		{
			displayName: 'Organization Name',
			name: 'organizationName',
			type: 'string',
			default: '',
			required: true,
			description: 'The internal name of your exchange organization',
		},
		{
			displayName: 'Exchange Service',
			name: 'exchangeService',
			type: 'string',
			default: '',
			required: true,
			description: 'The internal name of your exchange service',
		},
		{
			displayName: 'Block Legacy Auth Active Sync',
			name: 'blockLegacyAuthActiveSync',
			type: 'string',
			default: '',
			description: 'Filter the value of blockLegacyAuthActiveSync property (=)',
		},
		{
			displayName: 'Block Legacy Auth Autodiscover',
			name: 'blockLegacyAuthAutodiscover',
			type: 'string',
			default: '',
			description: 'Filter the value of blockLegacyAuthAutodiscover property (=)',
		},
		{
			displayName: 'Block Legacy Auth Imap',
			name: 'blockLegacyAuthImap',
			type: 'string',
			default: '',
			description: 'Filter the value of blockLegacyAuthImap property (=)',
		},
		{
			displayName: 'Block Legacy Auth Mapi',
			name: 'blockLegacyAuthMapi',
			type: 'string',
			default: '',
			description: 'Filter the value of blockLegacyAuthMapi property (=)',
		},
		{
			displayName: 'Block Legacy Auth Offline Address Book',
			name: 'blockLegacyAuthOfflineAddressBook',
			type: 'string',
			default: '',
			description: 'Filter the value of blockLegacyAuthOfflineAddressBook property (=)',
		},
		{
			displayName: 'Block Legacy Auth Pop',
			name: 'blockLegacyAuthPop',
			type: 'string',
			default: '',
			description: 'Filter the value of blockLegacyAuthPop property (=)',
		},
		{
			displayName: 'Block Legacy Auth Web Services',
			name: 'blockLegacyAuthWebServices',
			type: 'string',
			default: '',
			description: 'Filter the value of blockLegacyAuthWebServices property (=)',
		},
		{
			displayName: 'Block Modern Auth Active Sync',
			name: 'blockModernAuthActiveSync',
			type: 'string',
			default: '',
			description: 'Filter the value of blockModernAuthActiveSync property (=)',
		},
		{
			displayName: 'Block Modern Auth Autodiscover',
			name: 'blockModernAuthAutodiscover',
			type: 'string',
			default: '',
			description: 'Filter the value of blockModernAuthAutodiscover property (=)',
		},
		{
			displayName: 'Block Modern Auth Imap',
			name: 'blockModernAuthImap',
			type: 'string',
			default: '',
			description: 'Filter the value of blockModernAuthImap property (=)',
		},
		{
			displayName: 'Block Modern Auth Mapi',
			name: 'blockModernAuthMapi',
			type: 'string',
			default: '',
			description: 'Filter the value of blockModernAuthMapi property (=)',
		},
		{
			displayName: 'Block Modern Auth Offline Address Book',
			name: 'blockModernAuthOfflineAddressBook',
			type: 'string',
			default: '',
			description: 'Filter the value of blockModernAuthOfflineAddressBook property (=)',
		},
		{
			displayName: 'Block Modern Auth Pop',
			name: 'blockModernAuthPop',
			type: 'string',
			default: '',
			description: 'Filter the value of blockModernAuthPop property (=)',
		},
		{
			displayName: 'Block Modern Auth Web Services',
			name: 'blockModernAuthWebServices',
			type: 'string',
			default: '',
			description: 'Filter the value of blockModernAuthWebServices property (=)',
		},
	];
}

/**
 * Authentication policy for protocols
 *
 * HTTP method: GET
 * Endpoint: /email/exchange/{organizationName}/service/{exchangeService}/authenticationPolicy
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const organizationName = this.getNodeParameter('organizationName', _itemIndex ?? 0) as string;
	const exchangeService = this.getNodeParameter('exchangeService', _itemIndex ?? 0) as string;
	const blockLegacyAuthActiveSync = this.getNodeParameter('blockLegacyAuthActiveSync', _itemIndex ?? 0) as string;
	const blockLegacyAuthAutodiscover = this.getNodeParameter('blockLegacyAuthAutodiscover', _itemIndex ?? 0) as string;
	const blockLegacyAuthImap = this.getNodeParameter('blockLegacyAuthImap', _itemIndex ?? 0) as string;
	const blockLegacyAuthMapi = this.getNodeParameter('blockLegacyAuthMapi', _itemIndex ?? 0) as string;
	const blockLegacyAuthOfflineAddressBook = this.getNodeParameter('blockLegacyAuthOfflineAddressBook', _itemIndex ?? 0) as string;
	const blockLegacyAuthPop = this.getNodeParameter('blockLegacyAuthPop', _itemIndex ?? 0) as string;
	const blockLegacyAuthWebServices = this.getNodeParameter('blockLegacyAuthWebServices', _itemIndex ?? 0) as string;
	const blockModernAuthActiveSync = this.getNodeParameter('blockModernAuthActiveSync', _itemIndex ?? 0) as string;
	const blockModernAuthAutodiscover = this.getNodeParameter('blockModernAuthAutodiscover', _itemIndex ?? 0) as string;
	const blockModernAuthImap = this.getNodeParameter('blockModernAuthImap', _itemIndex ?? 0) as string;
	const blockModernAuthMapi = this.getNodeParameter('blockModernAuthMapi', _itemIndex ?? 0) as string;
	const blockModernAuthOfflineAddressBook = this.getNodeParameter('blockModernAuthOfflineAddressBook', _itemIndex ?? 0) as string;
	const blockModernAuthPop = this.getNodeParameter('blockModernAuthPop', _itemIndex ?? 0) as string;
	const blockModernAuthWebServices = this.getNodeParameter('blockModernAuthWebServices', _itemIndex ?? 0) as string;

	const qs: IDataObject = {
    blockLegacyAuthActiveSync: blockLegacyAuthActiveSync,
    blockLegacyAuthAutodiscover: blockLegacyAuthAutodiscover,
    blockLegacyAuthImap: blockLegacyAuthImap,
    blockLegacyAuthMapi: blockLegacyAuthMapi,
    blockLegacyAuthOfflineAddressBook: blockLegacyAuthOfflineAddressBook,
    blockLegacyAuthPop: blockLegacyAuthPop,
    blockLegacyAuthWebServices: blockLegacyAuthWebServices,
    blockModernAuthActiveSync: blockModernAuthActiveSync,
    blockModernAuthAutodiscover: blockModernAuthAutodiscover,
    blockModernAuthImap: blockModernAuthImap,
    blockModernAuthMapi: blockModernAuthMapi,
    blockModernAuthOfflineAddressBook: blockModernAuthOfflineAddressBook,
    blockModernAuthPop: blockModernAuthPop,
    blockModernAuthWebServices: blockModernAuthWebServices
	};

	const client = new ApiClient(this);
	const data = (await client.httpGet("/email/exchange/" + encodeURIComponent(organizationName) + "/service/" + encodeURIComponent(exchangeService) + "/authenticationPolicy", qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
