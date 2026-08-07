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
			displayName: 'Domain Name',
			name: 'domainName',
			type: 'string',
			default: '',
			required: true,
			description: 'Domain name',
		},
		{
			displayName: 'Selector Name',
			name: 'selectorName',
			type: 'string',
			default: '',
			required: true,
			description: 'selectorName',
		},
	];
}

/**
 * disable dkim signing
 *
 * HTTP method: POST
 * Endpoint: /email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/dkim/{selectorName}/disable
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const organizationName = this.getNodeParameter('organizationName', 0) as string;
	const exchangeService = this.getNodeParameter('exchangeService', 0) as string;
	const domainName = this.getNodeParameter('domainName', 0) as string;
	const selectorName = this.getNodeParameter('selectorName', 0) as string;

	const client = new ApiClient(this);
	const data = (await client.httpPost("/email/exchange/" + encodeURIComponent(organizationName) + "/service/" + encodeURIComponent(exchangeService) + "/domain/" + encodeURIComponent(domainName) + "/dkim/" + encodeURIComponent(selectorName) + "/disable")) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
