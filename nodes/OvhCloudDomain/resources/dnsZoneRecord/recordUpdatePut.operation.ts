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
			displayOptions,
		},
		{
			displayName: 'Record ID',
			name: 'recordId',
			type: 'string',
			default: '',
			required: true,
			description: 'The record identifier',
			displayOptions,
		},
		{
			displayName: 'Field',
			name: 'field',
			type: 'string',
			default: '',
			description: 'The record field (hostname)',
			displayOptions,
		},
		{
			displayName: 'Subdomain',
			name: 'subdomain',
			type: 'string',
			default: '',
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
			description: 'The DNS record type',
			displayOptions,
		},
		{
			displayName: 'Value',
			name: 'value',
			type: 'string',
			default: '',
			description: 'The record value',
			displayOptions,
		},
	];
}

/**
 * Executes the Update DNS Zone Record operation.
 *
 * HTTP method: PUT
 * Endpoint: /domain/dnsZone/{domainName}/record/{recordId}
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const domainName = this.getNodeParameter('domainName', 0) as string;
	const recordId = this.getNodeParameter('recordId', 0) as string;
	const field = (this.getNodeParameter('field', 0, '') as string) || undefined;
	const subdomain = (this.getNodeParameter('subdomain', 0, '') as string) || undefined;
	const type = (this.getNodeParameter('type', 0, '') as string) || undefined;
	const value = (this.getNodeParameter('value', 0, '') as string) || undefined;

	const body: IDataObject = {};
	if (field) body.field = field;
	if (subdomain) body.subdomain = subdomain;
	if (type) body.type = type;
	if (value) body.value = value;

	const data = (await client.httpPut(
		`/domain/dnsZone/${domainName}/record/${recordId}`,
		body,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
