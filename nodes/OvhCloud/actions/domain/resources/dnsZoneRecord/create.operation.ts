import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * @brief Create DNS Zone Record operation
 *
 * Creates a new DNS record in a zone.
 *
 * HTTP method: POST
 * Endpoint: /domain/zone/{zoneName}/record
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Zone Name',
			name: 'zoneName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the DNS zone',
			displayOptions,
		},
		{
			displayName: 'Field Type',
			name: 'fieldType',
			type: 'options',
			options: [
				{ name: 'A', value: 'A' },
				{ name: 'AAAA', value: 'AAAA' },
				{ name: 'CAA', value: 'CAA' },
				{ name: 'CNAME', value: 'CNAME' },
				{ name: 'DNAME', value: 'DNAME' },
				{ name: 'LOC', value: 'LOC' },
				{ name: 'MX', value: 'MX' },
				{ name: 'NAPTR', value: 'NAPTR' },
				{ name: 'NS', value: 'NS' },
				{ name: 'SPF', value: 'SPF' },
				{ name: 'SRV', value: 'SRV' },
				{ name: 'SSHFP', value: 'SSHFP' },
				{ name: 'TLSA', value: 'TLSA' },
				{ name: 'TXT', value: 'TXT' },
			],
			default: 'A',
			required: true,
			description: 'The DNS record type',
			displayOptions,
		},
		{
			displayName: 'Sub Domain',
			name: 'subDomain',
			type: 'string',
			default: '',
			description: 'The subdomain for the record',
			displayOptions,
		},
		{
			displayName: 'Target',
			name: 'target',
			type: 'string',
			default: '',
			required: true,
			description: 'The target value for the record',
			displayOptions,
		},
		{
			displayName: 'TTL',
			name: 'ttl',
			type: 'number',
			default: 0,
			description: 'Time to live in seconds (0 for default)',
			displayOptions,
		},
	];
}

/**
 * Executes the Create DNS Zone Record operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const zoneName = this.getNodeParameter('zoneName', 0) as string;
	const fieldType = this.getNodeParameter('fieldType', 0) as string;
	const subDomain = this.getNodeParameter('subDomain', 0, '') as string;
	const target = this.getNodeParameter('target', 0) as string;
	const ttl = this.getNodeParameter('ttl', 0, 0) as number;

	const body: IDataObject = { fieldType, target };
	if (subDomain) body.subDomain = subDomain;
	if (ttl > 0) body.ttl = ttl;

	const data = (await client.httpPost(`/domain/zone/${zoneName}/record`, body)) as IDataObject;
	return [{ json: data }];
}
