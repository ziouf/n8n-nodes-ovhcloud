import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../shared/transport/ApiClient';

/**
 * @brief Get Task operation for Dedicated Housing
 *
 * Retrieves details of a specific task for a Dedicated Housing service.
 *
 * HTTP method: GET
 * Endpoint: /dedicated/housing/{serviceName}/task/{taskId}
 */
export function descriptionTasksGet(displayOptions: IDisplayOptions): INodeProperties[] {
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
			displayName: 'Task ID',
			name: 'taskId',
			description: 'The ID of the task to retrieve',
			type: 'string',
			required: true,
			default: '',
			displayOptions,
		},
	];
}

/**
 * Executes the Get Task operation.
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing task details
 */
export async function executeTasksGet(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, { extractValue: true }) as string;
	const taskId = this.getNodeParameter('taskId', 0) as string;

	const task = (await client.httpGet(
		`/dedicated/housing/${serviceName}/task/${taskId}`,
	)) as IDataObject;

	return [{ json: task }];
}
