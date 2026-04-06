import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../shared/transport/ApiClient';

/**
 * @brief List Tasks operation for Dedicated Housing
 *
 * Lists all tasks for a specific Dedicated Housing service.
 * Optional query parameters: function, status.
 *
 * HTTP method: GET
 * Endpoint: /dedicated/housing/{serviceName}/task
 */
export function descriptionTasksList(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			description:
				'The name of the Dedicated Housing service. This can be set manually or selected from the list of services.',
			type: 'resourceLocator',
			required: true,
			default: {
				mode: 'str',
				value: '',
			},
			modes: [
				{
					displayName: 'By Name',
					name: 'str',
					type: 'string',
				},
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					placeholder: 'Select a service...',
					typeOptions: {
						searchListMethod: 'getDedicatedHousingServices',
						searchable: true,
					},
				},
			],
			displayOptions,
		},
		{
			displayName: 'Function',
			name: 'function',
			description: 'Filter tasks by function',
			type: 'string',
			default: '',
			displayOptions,
		},
		{
			displayName: 'Status',
			name: 'status',
			description: 'Filter tasks by status',
			type: 'string',
			default: '',
			displayOptions,
		},
	];
}

/**
 * Executes the List Tasks operation.
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing task IDs
 */
export async function executeTasksList(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, { extractValue: true }) as string;
	const func = this.getNodeParameter('function', 0, '') as string;
	const status = this.getNodeParameter('status', 0, '') as string;

	const qs: IDataObject = {};
	if (func) qs.function = func;
	if (status) qs.status = status;

	const tasks = (await client.httpGet(
		`/dedicated/housing/${serviceName}/task`,
		Object.keys(qs).length > 0 ? qs : undefined,
	)) as IDataObject[];

	return this.helpers.returnJsonArray(tasks);
}
