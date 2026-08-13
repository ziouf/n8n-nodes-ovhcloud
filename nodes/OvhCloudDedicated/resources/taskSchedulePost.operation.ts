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
				description: 'Schedule task',
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
			description: 'Schedule task',
			displayOptions,
		},
		{
			displayName: 'Date',
			name: 'date',
			type: 'string',
			default: '',
			required: true,
			description: 'Schedule task',
			displayOptions,
		},
	];
}

/**
 * Schedule task
 *
 * HTTP method: POST
 * Endpoint: /dedicated/server/{serviceName}/task/{taskId}/schedule
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const taskId = this.getNodeParameter('taskId', _itemIndex) as string;
	const date = this.getNodeParameter('date', _itemIndex, '') as string;

	const body: IDataObject = {};
		if (date) {
			body.date = date;
		}

	const data = (await client.httpPost(
		`/dedicated/server/${encodeURIComponent(String(serviceName))}/task/${encodeURIComponent(String(taskId))}/schedule`,
		body
	)) as IDataObject;
	const inputData = this.getInputData()[_itemIndex];
	return this.helpers.returnJsonArray([{ ...inputData.json, ...data }]);
}
