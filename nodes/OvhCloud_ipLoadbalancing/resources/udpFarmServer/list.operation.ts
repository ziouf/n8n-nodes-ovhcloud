import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * List servers in a UDP Farm.
 *
 * HTTP method: GET
 * Endpoint: /ipLoadbalancing/{serviceName}/udp/farm/{farmId}/server
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The service name of the IP Load Balancer',
			displayOptions,
		},
		{
			displayName: 'Farm ID',
			name: 'farmId',
			type: 'number',
			default: 0,
			required: true,
			description: 'The ID of the UDP Farm',
			displayOptions,
		},
		{
			displayName: 'Address',
			name: 'address',
			type: 'string',
			default: '',
			description: 'Filter by server address',
			displayOptions,
		},
		{
			displayName: 'Status',
			name: 'status',
			type: 'string',
			default: '',
			description: 'Filter by server status',
			displayOptions,
		},
	];
}

/**
 * Executes the List UDP Farm Servers operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const farmId = this.getNodeParameter('farmId', 0) as number;
	const address = this.getNodeParameter('address', 0, '') as string;
	const status = this.getNodeParameter('status', 0, '') as string;
	const qs: Record<string, string> = {};
	if (address) qs.address = address;
	if (status) qs.status = status;
	const data = (await client.httpGet(
		`/ipLoadbalancing/${serviceName}/udp/farm/${farmId}/server`,
		{ qs },
	)) as IDataObject[];
	return this.helpers.returnJsonArray(data);
}
