import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../shared/transport/ApiClient';

/**
 * Get a specific notification routing.
 *
 * HTTP method: GET
 * Endpoint: /v2/notification/routing/{routingId}
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Routing ID',
			name: 'routingId',
			type: 'string',
			default: '',
			required: true,
			description: 'The ID of the routing',
			displayOptions,
		},
	];
}

/**
 * Executes the Get Notification Routing operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const routingId = this.getNodeParameter('routingId', 0) as string;
	const data = (await client.httpGet(`/v2/notification/routing/${routingId}`)) as IDataObject;
	return [{ json: data }];
}
