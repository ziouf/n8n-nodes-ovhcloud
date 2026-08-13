import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';
import { serviceNameLocator } from '../../../shared/nodes/locators';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			...serviceNameLocator({
				searchListMethod: 'getDedicatedServerServices',
				displayName: 'Service Name',
				description: 'Get available timeslots for task',
				placeholder: 'server-12345',
			}),
			displayOptions,
		},
		{
			displayName: 'Task ID',
			name: 'taskId',
			type: 'string',
			default: '',
			required: true,
			description: 'Get available timeslots for task',
			displayOptions,
		},
	];
}

/**
 * Get available timeslots for task
 *
 * HTTP method: GET
 * Endpoint: /dedicated/server/{serviceName}/task/{taskId}/availableTimeslots
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const taskId = this.getNodeParameter('taskId', _itemIndex) as string;

	const data = (await client.httpGet(
		`/dedicated/server/${encodeURIComponent(String(serviceName))}/task/${encodeURIComponent(String(taskId))}/availableTimeslots`,
	)) as IDataObject;
	const inputData = this.getInputData()[_itemIndex];
	return this.helpers.returnJsonArray([{ ...inputData.json, ...data }]);
}
