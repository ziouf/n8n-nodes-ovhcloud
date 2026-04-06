import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * @brief List Hosting Tasks operation
 *
 * Retrieves all tasks for a specific private database hosting service.
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the List Hosting Tasks operation
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the hosting service',
			displayOptions,
		},
		{
			displayName: 'Function',
			name: 'function',
			type: 'string',
			default: '',
			description: 'Filter tasks by function name',
			displayOptions,
		},
		{
			displayName: 'Status',
			name: 'status',
			type: 'options',
			options: [
				{ name: 'Todo', value: 'todo' },
				{ name: 'Doing', value: 'doing' },
				{ name: 'Done', value: 'done' },
				{ name: 'Error', value: 'error' },
			],
			default: 'todo',
			description: 'Filter tasks by status',
			displayOptions,
		},
	];
}

/**
 * Executes the List Hosting Tasks operation.
 *
 * HTTP method: GET
 * Endpoint: /hosting/privateDatabase/{serviceName}/tasks
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing task IDs
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const functionFilter = this.getNodeParameter('function', 0, undefined) as string | undefined;
	const statusFilter = this.getNodeParameter('status', 0, undefined) as string | undefined;

	const qs: IDataObject = {};
	if (functionFilter) qs.function = functionFilter;
	if (statusFilter) qs.status = statusFilter;

	const data = (await client.httpGet(`/hosting/privateDatabase/${serviceName}/tasks`, {
		qs,
	})) as IDataObject[];
	return data.map((item) => ({ json: item }));
}
