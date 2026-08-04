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
			displayName: 'Vrack Services ID',
			name: 'vrackServicesId',
			type: 'string',
			default: '',
			required: true,
			description: 'The vrackServicesId identifier',
			displayOptions,
		},
		{
			displayName: 'Task ID',
			name: 'taskId',
			type: 'string',
			default: '',
			required: true,
			description: 'The taskId identifier',
			displayOptions,
		},

	];
}

/**
 * Executes the Get Get the task operation.
 *
 * HTTP method: GET
 * Endpoint: /vrackServices/resource/{vrackServicesId}/task/{taskId}
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const vrackServicesId = this.getNodeParameter('vrackServicesId', itemIndex) as string;
	const taskId = this.getNodeParameter('taskId', itemIndex) as string;


	const client = new ApiClient(this);
	const data = (await client.httpGet('/vrackServices/resource/' + vrackServicesId + '/task/' + taskId)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
