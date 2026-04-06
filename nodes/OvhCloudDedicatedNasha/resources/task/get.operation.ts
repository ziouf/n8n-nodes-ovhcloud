import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * @brief Get Task operation for DedicatedNasha resource
 *
 * Retrieves details of a specific task:
 * - HTTP GET request to `/dedicated/nasha/{serviceName}/task/{taskId}` endpoint
 * - Service name and task ID are required
 * - Returns task details
 */
export function descriptionDedicatedNashaTaskGet(
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
			displayName: 'Task ID',
			name: 'taskId',
			description: 'The ID of the task to retrieve',
			type: 'number',
			required: true,
			default: 0,
			displayOptions,
		},
	];
}

/**
 * Executes the Get Task operation.
 *
 * Retrieves details of a specific task.
 *
 * HTTP method: GET
 * Endpoint: /dedicated/nasha/{serviceName}/task/{taskId}
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing task details
 */
export async function executeDedicatedNashaTaskGet(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, { extractValue: true }) as string;
	const taskId = this.getNodeParameter('taskId', 0) as number;

	const response = (await client.httpGet(
		`/dedicated/nasha/${serviceName}/task/${taskId}`,
	)) as IDataObject;

	return this.helpers.returnJsonArray(response);
}
