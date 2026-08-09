import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Zone Name',
			name: 'zoneName',
			type: 'string',
			default: '',
			required: true,
			description: 'The zoneName identifier',
			displayOptions,
		},
		{
			displayName: 'Field Type',
			name: 'fieldType',
			type: 'options',
			default: 'A',
			options: [
				{ name: 'A', value: 'A' },
				{ name: 'AAAA', value: 'AAAA' },
				{ name: 'CAA', value: 'CAA' },
				{ name: 'CNAME', value: 'CNAME' },
				{ name: 'DKIM', value: 'DKIM' },
				{ name: 'DMARC', value: 'DMARC' },
				{ name: 'DNAME', value: 'DNAME' },
				{ name: 'HTTPS', value: 'HTTPS' },
				{ name: 'LOC', value: 'LOC' },
				{ name: 'MX', value: 'MX' },
				{ name: 'NAPTR', value: 'NAPTR' },
				{ name: 'NS', value: 'NS' },
				{ name: 'PTR', value: 'PTR' },
				{ name: 'RP', value: 'RP' },
				{ name: 'SPF', value: 'SPF' },
				{ name: 'SRV', value: 'SRV' },
				{ name: 'SSHFP', value: 'SSHFP' },
				{ name: 'SVCB', value: 'SVCB' },
				{ name: 'TLSA', value: 'TLSA' },
				{ name: 'TXT', value: 'TXT' },
			],
			required: true,
			description: 'Field Type value',
			displayOptions,
		},
		{
			displayName: 'Sub Domain',
			name: 'subDomain',
			type: 'string',
			default: '',
			description: 'Record subDomain',
			displayOptions,
		},
		{
			displayName: 'Target',
			name: 'target',
			type: 'string',
			default: '',
			required: true,
			description: 'Target of the record',
			displayOptions,
		},
		{
			displayName: 'TTL',
			name: 'ttl',
			type: 'number',
			default: 0,
			description: 'TTL of the record',
			displayOptions,
		},
	];
}

/**
 * Executes the Create a new record (Don't forget to refresh the zone) operation.
 *
 * HTTP method: POST
 * Endpoint: /domain/zone/{zoneName}/record
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
		const zoneName = this.getNodeParameter('zoneName', _itemIndex) as string;

	const body: IDataObject = {};
		const fieldType = this.getNodeParameter('fieldType', _itemIndex, '') as string;
		body['fieldType'] = fieldType;
		const subDomain = this.getNodeParameter('subDomain', _itemIndex, '') as string;
		if (subDomain !== '') body['subDomain'] = subDomain;
		const target = this.getNodeParameter('target', _itemIndex, '') as string;
		body['target'] = target;
		const ttl = this.getNodeParameter('ttl', _itemIndex, 0) as number;
		if (ttl !== 0) body['ttl'] = ttl;

	const data = (await client.httpPost(`/domain/zone/${encodeURIComponent(zoneName)}/record`, body)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
