import type {
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Delete a vRack network description.
 *
 * HTTP method: DELETE
 * Endpoint: /ipLoadbalancing/{serviceName}/vrack/network/{vrackNetworkId}
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
			displayName: 'vRack Network ID',
			name: 'vrackNetworkId',
			type: 'number',
			default: 0,
			required: true,
			description: 'The ID of the vRack network',
			displayOptions,
		},
	];
}

/**
 * Executes the Delete vRack Network operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const vrackNetworkId = this.getNodeParameter('vrackNetworkId', 0) as number;
	await client.httpDelete(`/ipLoadbalancing/${serviceName}/vrack/network/${vrackNetworkId}`);
	return [{ json: { success: true } }];
}
