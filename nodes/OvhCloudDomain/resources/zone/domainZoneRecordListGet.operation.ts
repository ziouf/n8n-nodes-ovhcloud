import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../../shared/transport/ApiClient';

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
			description: 'Filter the value of fieldType property (like)',
			displayOptions,
		},
		{
			displayName: 'Sub Domain',
			name: 'subDomain',
			type: 'string',
			default: '',
			description: 'Filter the value of subDomain property (ilike)',
			displayOptions,
		},
	];
}

/**
 * Executes the List record operation.
 *
 * HTTP method: GET
 * Endpoint: /domain/zone/{zoneName}/record
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
		const zoneName = this.getNodeParameter('zoneName', _itemIndex) as string;

	const qs: IDataObject = {};
		const fieldType = this.getNodeParameter('fieldType', _itemIndex, '') as string;
		if (fieldType !== '' && fieldType !== undefined) qs['fieldType'] = fieldType;
		const subDomain = this.getNodeParameter('subDomain', _itemIndex, '') as string;
		if (subDomain !== '' && subDomain !== undefined) qs['subDomain'] = subDomain;

	const data = (await client.httpGet(`/domain/zone/${encodeURIComponent(zoneName)}/record`, qs)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
