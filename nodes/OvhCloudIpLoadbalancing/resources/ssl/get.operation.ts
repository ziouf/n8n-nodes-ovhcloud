import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Get an SSL certificate's properties.
 *
 * HTTP method: GET
 * Endpoint: /ipLoadbalancing/{serviceName}/ssl/{id}
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
			displayName: 'SSL ID',
			name: 'sslId',
			type: 'number',
			default: 0,
			required: true,
			description: 'The ID of the SSL certificate',
			displayOptions,
		},
	];
}

/**
 * Executes the Get SSL Certificate operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const sslId = this.getNodeParameter('sslId', 0) as number;
	const data = (await client.httpGet(
		`/ipLoadbalancing/${serviceName}/ssl/${sslId}`,
	)) as IDataObject;
	return [{ json: data }];
}
