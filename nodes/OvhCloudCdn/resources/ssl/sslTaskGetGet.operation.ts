import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The internal name of your CDN offer',
			displayOptions,
		},
		{
			displayName: 'Task ID',
			name: 'taskId',
			type: 'number',
			default: 0,
			required: true,
			displayOptions,
		},
	];
}

/**
 * Executes the Get GetSslTask operation.
 *
 * HTTP method: GET
 * Endpoint: /cdn/dedicated/{serviceName}/ssl/tasks/{taskId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const taskId = this.getNodeParameter('taskId', _itemIndex) as number;

	const client = new ApiClient(this);
	const data = (await client.httpGet(`/cdn/dedicated/${encodeURIComponent(serviceName)}/ssl/tasks/${encodeURIComponent(taskId)}`)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
