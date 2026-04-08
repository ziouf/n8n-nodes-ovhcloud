import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * @brief Update DNS Zone SOA operation
 *
 * Updates SOA record for a DNS zone.
 *
 * HTTP method: PUT
 * Endpoint: /domain/zone/{zoneName}/soa
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
			displayName: 'Serial',
			name: 'serial',
			type: 'number',
			default: 0,
			description: 'SOA serial number',
			displayOptions,
		},
		{
			displayName: 'Refresh',
			name: 'refresh',
			type: 'number',
			default: 0,
			description: 'SOA refresh interval',
			displayOptions,
		},
		{
			displayName: 'Update',
			name: 'update',
			type: 'number',
			default: 0,
			description: 'SOA update interval',
			displayOptions,
		},
		{
			displayName: 'Expire',
			name: 'expire',
			type: 'number',
			default: 0,
			description: 'SOA expire time',
			displayOptions,
		},
		{
			displayName: 'Minimum',
			name: 'minimum',
			type: 'number',
			default: 0,
			description: 'SOA minimum TTL',
			displayOptions,
		},
	];
}

/**
 * Executes the Update DNS Zone SOA operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const zoneName = this.getNodeParameter('zoneName', 0) as string;

	const body: IDataObject = {};
	const serial = this.getNodeParameter('serial', 0, 0) as number;
	const refresh = this.getNodeParameter('refresh', 0, 0) as number;
	const update = this.getNodeParameter('update', 0, 0) as number;
	const expire = this.getNodeParameter('expire', 0, 0) as number;
	const minimum = this.getNodeParameter('minimum', 0, 0) as number;

	if (serial > 0) body.serial = serial;
	if (refresh > 0) body.refresh = refresh;
	if (update > 0) body.update = update;
	if (expire > 0) body.expire = expire;
	if (minimum > 0) body.minimum = minimum;

	const data = (await client.httpPut(`/domain/zone/${zoneName}/soa`, body)) as IDataObject;
	return [{ json: data }];
}
