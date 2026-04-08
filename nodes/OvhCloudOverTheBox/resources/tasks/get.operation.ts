import type { IExecuteFunctions, INodeExecutionData, IDataObject, INodeProperties, IDisplayOptions } from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/** Get task details. HTTP: GET /overTheBox/{serviceName}/tasks/{taskId} */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{ displayName: 'Service Name', name: 'serviceName', type: 'string', default: '', required: true, description: 'The name of the OverTheBox service', displayOptions },
		{ displayName: 'Task ID', name: 'taskId', type: 'string', default: '', required: true, description: 'The ID of the task', displayOptions },
	];
}
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const taskId = this.getNodeParameter('taskId', 0) as string;
	const data = (await client.httpGet(`/overTheBox/${serviceName}/tasks/${taskId}`)) as IDataObject;
	return [{ json: data }];
}
