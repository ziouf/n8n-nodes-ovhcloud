import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * @brief Update DynHost Record operation
 *
 * Updates a DynHost record for a DNS zone.
 *
 * HTTP method: PUT
 * Endpoint: /domain/zone/{zoneName}/dynHost/record/{id}
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
			description: 'The ID of the DynHost record to update',
			displayOptions,
		},
		{
			displayName: 'Sub Domain',
			name: 'subDomain',
			type: 'string',
			default: '',
			description: 'The subdomain for the DynHost record',
			displayOptions,
		},
		{
			displayName: 'Target',
			name: 'target',
			type: 'string',
			default: '',
			description: 'The target IP address',
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
 * Executes the Update DynHost Record operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const zoneName = this.getNodeParameter('zoneName', 0) as string;
	const id = this.getNodeParameter('id', 0) as string;

	const body: IDataObject = {};
	const subDomain = this.getNodeParameter('subDomain', 0, '') as string;
	const target = this.getNodeParameter('target', 0, '') as string;
	const ttl = this.getNodeParameter('ttl', 0, 0) as number;

	if (subDomain) body.subDomain = subDomain;
	if (target) body.target = target;
	if (ttl > 0) body.ttl = ttl;

	const data = (await client.httpPut(`/domain/zone/${zoneName}/dynHost/record/${id}`, body)) as IDataObject;
	return [{ json: data }];
}
