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
			displayName: 'notification Id',
			name: 'notificationId',
			type: 'string',
			default: '',
			required: true,
			description: 'The notificationId identifier',
		},
		{
			displayName: 'attachment Name',
			name: 'attachmentName',
			type: 'string',
			default: '',
			required: true,
			description: 'The attachmentName identifier',
		},

	];
}

/**
 * Executes the Get Get a notification attachment operation.
 *
 * HTTP method: GET
 * Endpoint: /notification/history/{notificationId}/attachment/{attachmentName}
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const notificationId = this.getNodeParameter('notificationId', itemIndex) as string;
	const attachmentName = this.getNodeParameter('attachmentName', itemIndex) as string;


	const client = new ApiClient(this);
	const data = (await client.httpGet('/notification/history/' + notificationId + '/attachment/' + attachmentName)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
