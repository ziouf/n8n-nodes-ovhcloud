import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../shared/transport/ApiClient';

/**
 * Get a specific notification history.
 *
 * HTTP method: GET
 * Endpoint: /v2/notification/history/{historyId}
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'History ID',
			name: 'historyId',
			type: 'string',
			default: '',
			required: true,
			description: 'The ID of the history',
			displayOptions,
		},
	];
}

/**
 * Executes the Get Notification History operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const historyId = this.getNodeParameter('historyId', 0) as string;
	const data = (await client.httpGet(`/v2/notification/history/${historyId}`)) as IDataObject;
	return [{ json: data }];
}
