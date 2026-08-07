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
			displayName: 'Content',
			name: 'content',
			type: 'string',
			default: '',
			required: true,
			description: 'Signature, added at the bottom of your organization emails',
		},
		{
			displayName: 'Outside Only',
			name: 'outsideOnly',
			type: 'string',
			default: '',
			description: 'Activate the disclaimer only for external emails',
		},
	];
}

/**
 * Create organization disclaimer of each email
 *
 * HTTP method: POST
 * Endpoint: /email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/disclaimer
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const organizationName = this.getNodeParameter('organizationName', 0) as string;
	const exchangeService = this.getNodeParameter('exchangeService', 0) as string;
	const domainName = this.getNodeParameter('domainName', 0) as string;
	const content = this.getNodeParameter('content', 0) as any;
	const outsideOnly = this.getNodeParameter('outsideOnly', 0) as any;

	const body: IDataObject = {
    content: content,
    outsideOnly: outsideOnly
	};

	const client = new ApiClient(this);
	const data = (await client.httpPost("/email/exchange/" + encodeURIComponent(organizationName) + "/service/" + encodeURIComponent(exchangeService) + "/domain/" + encodeURIComponent(domainName) + "/disclaimer", body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
