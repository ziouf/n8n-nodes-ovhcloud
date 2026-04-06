import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * List log subscriptions for an IP Load Balancer.
 *
 * HTTP method: GET
 * Endpoint: /ipLoadbalancing/{serviceName}/log/subscription
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
			displayName: 'Kind',
			name: 'kind',
			type: 'string',
			default: '',
			description: 'Filter by log kind',
			displayOptions,
		},
	];
}

/**
 * Executes the List Log Subscriptions operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const kind = this.getNodeParameter('kind', 0, '') as string;
	const qs: Record<string, string> = {};
	if (kind) qs.kind = kind;
	const data = (await client.httpGet(
		`/ipLoadbalancing/${serviceName}/log/subscription`,
		{ qs },
	)) as IDataObject[];
	return this.helpers.returnJsonArray(data);
}
