import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Get a TCP Farm server's properties.
 *
 * HTTP method: GET
 * Endpoint: /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}/server/{serverId}
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
			description: 'The ID of the TCP Farm',
			displayOptions,
		},
		{
			displayName: 'Server ID',
			name: 'serverId',
			type: 'number',
			default: 0,
			required: true,
			description: 'The ID of the server',
			displayOptions,
		},
	];
}

/**
 * Executes the Get TCP Farm Server operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const farmId = this.getNodeParameter('farmId', 0) as number;
	const serverId = this.getNodeParameter('serverId', 0) as number;
	const data = (await client.httpGet(
		`/ipLoadbalancing/${serviceName}/tcp/farm/${farmId}/server/${serverId}`,
	)) as IDataObject;
	return [{ json: data }];
}
