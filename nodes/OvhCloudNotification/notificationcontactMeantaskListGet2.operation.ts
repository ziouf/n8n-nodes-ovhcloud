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
			displayName: 'Contact Mean ID',
			name: 'contactMeanId',
			type: 'string',
			default: '',
			required: true,
			description: 'The contactMeanId identifier',
		},
		{
			displayName: 'Task ID',
			name: 'taskId',
			type: 'string',
			default: '',
			required: true,
			description: 'The taskId identifier',
		},

	];
}

/**
 * Executes the Get Get a task on a contact mean operation.
 *
 * HTTP method: GET
 * Endpoint: /notification/contactMean/{contactMeanId}/task/{taskId}
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const contactMeanId = this.getNodeParameter('contactMeanId', itemIndex) as string;
	const taskId = this.getNodeParameter('taskId', itemIndex) as string;


	const client = new ApiClient(this);
	const data = (await client.httpGet('/notification/contactMean/' + contactMeanId + '/task/' + taskId)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
