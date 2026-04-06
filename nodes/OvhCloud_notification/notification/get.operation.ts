import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

/**
 * @brief Get Notification operation for V2 API
 *
 * Retrieves detailed information for a specific notification:
 * - HTTP GET request to `/v2/notification/{notificationId}` endpoint
 * - Notification ID parameter is required
 * - Returns notification details
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the Get Notification operation
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Notification Name/ID',
			name: 'notificationId',
			type: 'string',
			default: '',
			required: true,
			description: 'The name or ID of the notification',
			displayOptions,
		},
	];
}

/**
 * Executes the Get Notification operation.
 *
 * Retrieves detailed information for a specific notification.
 *
 * HTTP method: GET
 * Endpoint: /v2/notification/{notificationId}
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing notification details
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const notificationId = this.getNodeParameter('notificationId', 0) as string;
	const data = (await client.httpGet(`/v2/notification/${notificationId}`)) as IDataObject;
	return [{ json: data }];
}
