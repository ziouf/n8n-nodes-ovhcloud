import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Add a new HTTP route to a frontend.
 *
 * HTTP method: POST
 * Endpoint: /ipLoadbalancing/{serviceName}/http/route
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
			description: 'The frontend ID to attach the route to',
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
		{
			displayName: 'Action',
			name: 'action',
			type: 'string',
			default: '',
			description: 'Route action type',
			displayOptions,
		},
	];
}

/**
 * Executes the Create HTTP Route operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const body: IDataObject = {};
	body.frontendId = this.getNodeParameter('frontendId', 0) as number;
	const weight = this.getNodeParameter('weight', 0, 0) as number;
	if (weight) body.weight = weight;
	const action = this.getNodeParameter('action', 0, '') as string;
	if (action) body.action = action;
	const data = (await client.httpPost(
		`/ipLoadbalancing/${serviceName}/http/route`,
		{ body },
	)) as IDataObject;
	return [{ json: data }];
}
