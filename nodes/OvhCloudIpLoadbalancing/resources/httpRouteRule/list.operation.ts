import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * List rules for an HTTP route.
 *
 * HTTP method: GET
 * Endpoint: /ipLoadbalancing/{serviceName}/http/route/{routeId}/rule
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
			description: 'The ID of the HTTP route',
			displayOptions,
		},
	];
}

/**
 * Executes the List HTTP Route Rules operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const routeId = this.getNodeParameter('routeId', 0) as number;
	const data = (await client.httpGet(
		`/ipLoadbalancing/${serviceName}/http/route/${routeId}/rule`,
	)) as IDataObject[];
	return this.helpers.returnJsonArray(data);
}
