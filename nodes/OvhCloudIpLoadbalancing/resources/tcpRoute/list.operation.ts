import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * List TCP routes for an IP Load Balancer.
 *
 * HTTP method: GET
 * Endpoint: /ipLoadbalancing/{serviceName}/tcp/route
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
			displayName: 'Frontend ID',
			name: 'frontendId',
			type: 'number',
			default: 0,
			description: 'Filter by frontend ID',
			displayOptions,
		},
	];
}

/**
 * Executes the List TCP Routes operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const frontendId = this.getNodeParameter('frontendId', 0, 0) as number;
	const qs: Record<string, string> = {};
	if (frontendId) qs.frontendId = String(frontendId);
	const data = (await client.httpGet(
		`/ipLoadbalancing/${serviceName}/tcp/route`,
		{ qs },
	)) as IDataObject[];
	return this.helpers.returnJsonArray(data);
}
