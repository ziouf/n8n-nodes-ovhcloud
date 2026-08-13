import type {
	IDataObject,
	IExecuteFunctions,
	INodeExecutionData,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';

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
			displayName: 'Domain Name',
			name: 'domainName',
			type: 'string',
			default: '',
			required: true,
		},
		{
			displayName: 'Auto Enable D K I M',
			name: 'autoEnableDKIM',
			type: 'string',
			default: '',
			description: 'Enable DKIM automatically after DKIM configuration',
		},
		{
			displayName: 'Configure Dkim',
			name: 'configureDkim',
			type: 'string',
			default: '',
			description: 'If you host domain in OVH we can configure dkim dns record automatically',
		},
		{
			displayName: 'Selector Name',
			name: 'selectorName',
			type: 'string',
			default: '',
			required: true,
			description: 'Selector name for DKIM',
		},
	];
}

/**
 * Create DKIM selector on this domain
 *
 * HTTP method: POST
 * Endpoint: /email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/dkim
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const organizationName = this.getNodeParameter('organizationName', _itemIndex ?? 0) as string;
	const exchangeService = this.getNodeParameter('exchangeService', _itemIndex ?? 0) as string;
	const domainName = this.getNodeParameter('domainName', _itemIndex ?? 0) as string;
	const autoEnableDKIM = this.getNodeParameter('autoEnableDKIM', _itemIndex ?? 0) as string;
	const configureDkim = this.getNodeParameter('configureDkim', _itemIndex ?? 0) as string;
	const selectorName = this.getNodeParameter('selectorName', _itemIndex ?? 0) as string;

	const body: IDataObject = {
    autoEnableDKIM: autoEnableDKIM,
    configureDkim: configureDkim,
    selectorName: selectorName
	};

	const client = getClient(this);
	const data = (await client.httpPost("/email/exchange/" + encodeURIComponent(organizationName) + "/service/" + encodeURIComponent(exchangeService) + "/domain/" + encodeURIComponent(domainName) + "/dkim", body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
