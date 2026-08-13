import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Notification ID',
			name: 'notificationId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
		{
			displayName: 'Attachment Name',
			name: 'attachmentName',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},

	];
}

/**
 * Executes the Get Get a notification attachment operation.
 *
 * HTTP method: GET
 * Endpoint: /notification/history/{notificationId}/attachment/{attachmentName}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const notificationId = this.getNodeParameter('notificationId', _itemIndex) as string;
	const attachmentName = this.getNodeParameter('attachmentName', _itemIndex) as string;


	const client = getClient(this);
	const data = (await client.httpGet('/notification/history/' + notificationId + '/attachment/' + attachmentName)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
