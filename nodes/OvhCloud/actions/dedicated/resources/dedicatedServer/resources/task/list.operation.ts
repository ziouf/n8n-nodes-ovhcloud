import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../../transport/ApiClient';

/**
 * @brief List Tasks operation
 *
 * Lists tasks for a specific dedicated server.
 *
 * HTTP method: GET
 * Endpoint: /dedicated/server/{serviceName}/task
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Function',
			name: 'function',
			type: 'string',
			default: '',
			description: 'Filter by task function',
			displayOptions,
		},
		{
			displayName: 'Status',
			name: 'status',
			type: 'options',
			options: [
				{ name: 'Todo', value: 'todo' },
				{ name: 'Doing', value: 'doing' },
				{ name: 'Ok', value: 'ok' },
				{ name: 'Error', value: 'error' },
			],
			default: 'todo',
			description: 'Filter by task status',
			displayOptions,
		},
	];
}

/**
 * Executes the List Tasks operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, { extractValue: true }) as string;

	const qs: IDataObject = {};
	const func = this.getNodeParameter('function', 0, '') as string;
	const status = this.getNodeParameter('status', 0, '') as string;
	if (func) qs.function = func;
	if (status) qs.status = status;

	const data = (await client.httpGet(`/dedicated/server/${serviceName}/task`, { qs })) as IDataObject[];
	return this.helpers.returnJsonArray(data);
}
