/**
 * @brief Get Task operation for private database
 *
 * HTTP GET request to `/hosting/privateDatabase/{serviceName}/tasks/{id}` endpoint.
 */
import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
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
			description: 'The name of the private database hosting service',
			displayOptions,
		},
		{
			displayName: 'Task ID',
			name: 'id',
			type: 'string',
			default: '',
			required: true,
			description: 'The ID of the task',
			displayOptions,
		},
	];
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const id = this.getNodeParameter('id', 0) as string;
	const data = (await client.httpGet(
		`/hosting/privateDatabase/${serviceName}/tasks/${id}`,
	)) as IDataObject;
	return [{ json: data }];
}
