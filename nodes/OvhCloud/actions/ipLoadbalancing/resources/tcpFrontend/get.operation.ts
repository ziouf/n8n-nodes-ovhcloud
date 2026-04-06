import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Get a TCP frontend's properties.
 *
 * HTTP method: GET
 * Endpoint: /ipLoadbalancing/{serviceName}/tcp/frontend/{frontendId}
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
			required: true,
			description: 'The ID of the TCP frontend',
			displayOptions,
		},
	];
}

/**
 * Executes the Get TCP Frontend operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const frontendId = this.getNodeParameter('frontendId', 0) as number;
	const data = (await client.httpGet(
		`/ipLoadbalancing/${serviceName}/tcp/frontend/${frontendId}`,
	)) as IDataObject;
	return [{ json: data }];
}
