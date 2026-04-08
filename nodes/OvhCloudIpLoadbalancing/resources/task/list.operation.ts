import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * List tasks for an IP Load Balancer.
 *
 * HTTP method: GET
 * Endpoint: /ipLoadbalancing/{serviceName}/task
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
			displayName: 'Status',
			name: 'status',
			type: 'string',
			default: '',
			description: 'Filter by task status',
			displayOptions,
		},
		{
			displayName: 'Action',
			name: 'action',
			type: 'string',
			default: '',
			description: 'Filter by task action',
			displayOptions,
		},
	];
}

/**
 * Executes the List Tasks operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const status = this.getNodeParameter('status', 0, '') as string;
	const action = this.getNodeParameter('action', 0, '') as string;
	const qs: Record<string, string> = {};
	if (status) qs.status = status;
	if (action) qs.action = action;
	const data = (await client.httpGet(
		`/ipLoadbalancing/${serviceName}/task`,
		{ qs },
	)) as IDataObject[];
	return this.helpers.returnJsonArray(data);
}
