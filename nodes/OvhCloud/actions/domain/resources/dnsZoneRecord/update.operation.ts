import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * @brief Update DNS Zone Record operation
 *
 * Updates a DNS record in a zone.
 *
 * HTTP method: PUT
 * Endpoint: /domain/zone/{zoneName}/record/{id}
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
			displayName: 'Record ID',
			name: 'id',
			type: 'string',
			default: '',
			required: true,
			description: 'The ID of the DNS record to update',
			displayOptions,
		},
		{
			displayName: 'Field Type',
			name: 'fieldType',
			type: 'string',
			default: '',
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
			description: 'The target value for the record',
			displayOptions,
		},
		{
			displayName: 'TTL',
			name: 'ttl',
			type: 'number',
			default: 0,
			description: 'Time to live in seconds',
			displayOptions,
		},
	];
}

/**
 * Executes the Update DNS Zone Record operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const zoneName = this.getNodeParameter('zoneName', 0) as string;
	const id = this.getNodeParameter('id', 0) as string;

	const body: IDataObject = {};
	const fieldType = this.getNodeParameter('fieldType', 0, '') as string;
	const subDomain = this.getNodeParameter('subDomain', 0, '') as string;
	const target = this.getNodeParameter('target', 0, '') as string;
	const ttl = this.getNodeParameter('ttl', 0, 0) as number;

	if (fieldType) body.fieldType = fieldType;
	if (subDomain) body.subDomain = subDomain;
	if (target) body.target = target;
	if (ttl > 0) body.ttl = ttl;

	const data = (await client.httpPut(`/domain/zone/${zoneName}/record/${id}`, body)) as IDataObject;
	return [{ json: data }];
}
