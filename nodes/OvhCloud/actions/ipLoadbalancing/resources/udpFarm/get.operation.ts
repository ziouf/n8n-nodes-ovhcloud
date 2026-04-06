import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Get a UDP Farm's properties.
 *
 * HTTP method: GET
 * Endpoint: /ipLoadbalancing/{serviceName}/udp/farm/{farmId}
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
	];
}

/**
 * Executes the Get UDP Farm operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const farmId = this.getNodeParameter('farmId', 0) as number;
	const data = (await client.httpGet(
		`/ipLoadbalancing/${serviceName}/udp/farm/${farmId}`,
	)) as IDataObject;
	return [{ json: data }];
}
