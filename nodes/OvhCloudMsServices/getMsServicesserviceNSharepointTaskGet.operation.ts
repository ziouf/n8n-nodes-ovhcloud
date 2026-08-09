import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeProperties,
	INodeExecutionData,
} from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'ServiceName',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The servicename identifier',
			displayOptions,
		},
		{
			displayName: 'Function',
			name: 'function',
			type: 'string',
			default: '',
			description: 'The function parameter',
			displayOptions,
		},
		{
			displayName: 'Status',
			name: 'status',
			type: 'string',
			default: '',
			description: 'The status parameter',
			displayOptions,
		},
	];
}

/**
 * Pending actions
 *
 * HTTP method: GET
 * Endpoint: /msServices/{serviceName}/sharepoint/task
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;

	const func = this.getNodeParameter('function', _itemIndex) as string;
	const status = this.getNodeParameter('status', _itemIndex) as string;

	const qs: IDataObject = {
		function: func,
		status: status,
	};

	const client = new ApiClient(this);
	const data = (await client.httpGet(
		'/msServices' + '/' + encodeURIComponent(serviceName) + '/' + 'sharepoint' + '/' + 'task',
		qs,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
