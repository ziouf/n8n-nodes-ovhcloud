import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Notification ID',
			name: 'notificationId',
			type: 'string',
			default: '',
			required: true,
			description: 'The notificationId identifier',
			displayOptions,
		},
	];
}

/**
 * Executes the Get Retrieve information about a notification sent to you operation.
 *
 * HTTP method: GET
 * Endpoint: /notification/history/{notificationId}
 */
export async function execute(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const notificationId = this.getNodeParameter('notificationId', itemIndex) as string;

	const client = new ApiClient(this);
	const data = (await client.httpGet('/notification/history/' + notificationId)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
