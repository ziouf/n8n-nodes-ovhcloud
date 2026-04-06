import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * List quota history informations, per month.
 *
 * HTTP method: GET
 * Endpoint: /ipLoadbalancing/{serviceName}/quotaHistory
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
			description: 'Filter by zone',
			displayOptions,
		},
	];
}

/**
 * Executes the List Quota History operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const zone = this.getNodeParameter('zone', 0, '') as string;
	const qs: Record<string, string> = {};
	if (zone) qs.zone = zone;
	const data = (await client.httpGet(
		`/ipLoadbalancing/${serviceName}/quotaHistory`,
		{ qs },
	)) as IDataObject[];
	return this.helpers.returnJsonArray(data);
}
