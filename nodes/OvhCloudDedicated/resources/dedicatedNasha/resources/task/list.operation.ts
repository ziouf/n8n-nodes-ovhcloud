import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../../shared/transport/ApiClient';

/**
 * @brief List Tasks operation for DedicatedNasha resource
 *
 * Lists all tasks for a specific Dedicated Nasha service:
 * - HTTP GET request to `/dedicated/nasha/{serviceName}/task` endpoint
 * - Service name is required
 * - Operation and status are optional filters
 * - Returns list of task IDs
 */
export function descriptionDedicatedNashaTaskList(
	displayOptions: IDisplayOptions,
): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			description:
				'The name of the Dedicated Nasha service. This can be set manually or selected from the list of services.',
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
						searchListMethod: 'getDedicatedNashaServices',
						searchable: true,
					},
				},
			],
			displayOptions,
		},
		{
			displayName: 'Operation',
			name: 'operation',
			description: 'Optional filter by operation type',
			type: 'string',
			default: '',
			displayOptions,
		},
		{
			displayName: 'Status',
			name: 'status',
			description: 'Optional filter by task status',
			type: 'string',
			default: '',
			displayOptions,
		},
	];
}

/**
 * Executes the List Tasks operation.
 *
 * Lists all tasks for a specific Dedicated Nasha service.
 *
 * HTTP method: GET
 * Endpoint: /dedicated/nasha/{serviceName}/task
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing task IDs
 */
export async function executeDedicatedNashaTaskList(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, { extractValue: true }) as string;
	const operation = this.getNodeParameter('operation', 0, '') as string;
	const status = this.getNodeParameter('status', 0, '') as string;

	const qs: IDataObject = {};
	if (operation) qs.operation = operation;
	if (status) qs.status = status;

	const tasks = (await client.httpGet(`/dedicated/nasha/${serviceName}/task`, qs)) as IDataObject[];

	return this.helpers.returnJsonArray(tasks);
}
