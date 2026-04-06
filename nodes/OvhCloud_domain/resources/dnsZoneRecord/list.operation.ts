import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * @brief List DNS Zone Records operation
 *
 * Lists DNS records in a zone.
 *
 * HTTP method: GET
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
			type: 'string',
			default: '',
			description: 'Filter by record type (A, AAAA, CNAME, MX, etc.)',
			displayOptions,
		},
		{
			displayName: 'Sub Domain',
			name: 'subDomain',
			type: 'string',
			default: '',
			description: 'Filter by subdomain',
			displayOptions,
		},
	];
}

/**
 * Executes the List DNS Zone Records operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const zoneName = this.getNodeParameter('zoneName', 0) as string;

	const qs: IDataObject = {};
	const fieldType = this.getNodeParameter('fieldType', 0, '') as string;
	const subDomain = this.getNodeParameter('subDomain', 0, '') as string;
	if (fieldType) qs.fieldType = fieldType;
	if (subDomain) qs.subDomain = subDomain;

	const data = (await client.httpGet(`/domain/zone/${zoneName}/record`, qs)) as IDataObject[];
	return this.helpers.returnJsonArray(data);
}
