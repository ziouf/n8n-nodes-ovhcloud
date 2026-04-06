import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Update a TCP route's properties.
 *
 * HTTP method: PUT
 * Endpoint: /ipLoadbalancing/{serviceName}/tcp/route/{routeId}
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
			displayName: 'Route ID',
			name: 'routeId',
			type: 'number',
			default: 0,
			required: true,
			description: 'The ID of the TCP route',
			displayOptions,
		},
		{
			displayName: 'Weight',
			name: 'weight',
			type: 'number',
			default: 0,
			description: 'Route priority weight',
			displayOptions,
		},
	];
}

/**
 * Executes the Update TCP Route operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const routeId = this.getNodeParameter('routeId', 0) as number;
	const body: IDataObject = {};
	const weight = this.getNodeParameter('weight', 0, 0) as number;
	if (weight) body.weight = weight;
	const data = (await client.httpPut(
		`/ipLoadbalancing/${serviceName}/tcp/route/${routeId}`,
		{ body },
	)) as IDataObject;
	return [{ json: data }];
}
