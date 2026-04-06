import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Get quota information for a specific zone.
 *
 * HTTP method: GET
 * Endpoint: /ipLoadbalancing/{serviceName}/quota/{zone}
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
			displayName: 'Zone',
			name: 'zone',
			type: 'string',
			default: '',
			required: true,
			description: 'The zone to get quota information for',
			displayOptions,
		},
	];
}

/**
 * Executes the Get Quota operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const zone = this.getNodeParameter('zone', 0) as string;
	const data = (await client.httpGet(
		`/ipLoadbalancing/${serviceName}/quota/${zone}`,
	)) as IDataObject;
	return [{ json: data }];
}
