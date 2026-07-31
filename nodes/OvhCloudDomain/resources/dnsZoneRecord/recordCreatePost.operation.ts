import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions) {
	return [
		{
			displayName: 'Domain Name',
			name: 'domainName',
			type: 'string',
			default: '',
			required: true,
			description: 'The domain name',
			displayOptions,
		},
		{
			displayName: 'Field',
			name: 'field',
			type: 'string',
			default: '',
			required: true,
			description: 'The record field (hostname)',
			displayOptions,
		},
		{
			displayName: 'Subdomain',
			name: 'subdomain',
			type: 'string',
			default: '',
			description: 'The subdomain',
			displayOptions,
		},
		{
			displayName: 'Type',
			name: 'type',
			type: 'options',
			options: [
				{ name: 'A', value: 'A' },
				{ name: 'AAAA', value: 'AAAA' },
				{ name: 'CNAME', value: 'CNAME' },
				{ name: 'MX', value: 'MX' },
				{ name: 'NS', value: 'NS' },
				{ name: 'PTR', value: 'PTR' },
				{ name: 'SRV', value: 'SRV' },
				{ name: 'TXT', value: 'TXT' },
				{ name: 'URI', value: 'URI' },
			],
			default: 'A',
			required: true,
			description: 'The DNS record type',
			displayOptions,
		},
		{
			displayName: 'Value',
			name: 'value',
			type: 'string',
			default: '',
			required: true,
			description: 'The record value',
			displayOptions,
		},
	];
}

/**
 * Executes the Create DNS Zone Record operation.
 *
 * HTTP method: POST
 * Endpoint: /domain/dnsZone/{domainName}/record
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const domainName = this.getNodeParameter('domainName', 0) as string;
	const field = this.getNodeParameter('field', 0) as string;
	const subdomain = (this.getNodeParameter('subdomain', 0, '') as string) || undefined;
	const type = this.getNodeParameter('type', 0) as string;
	const value = this.getNodeParameter('value', 0) as string;

	const body: IDataObject = { field, type, value };
	if (subdomain) {
		body.subdomain = subdomain;
	}

	const data = (await client.httpPost(`/domain/dnsZone/${domainName}/record`, body)) as string;
	return this.helpers.returnJsonArray([{ recordId: data }]);
}
