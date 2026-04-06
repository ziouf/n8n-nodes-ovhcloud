/**
 * @brief Get task details for a Dedicated Ceph cluster
 *
 * Retrieves details for a specific task:
 * - HTTP GET request to `/dedicated/ceph/{serviceName}/task/{taskId}` endpoint
 * - Returns task details
 */
import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'resourceLocator',
			default: {
				mode: 'list',
				value: '',
			},
			required: true,
			modes: [
				{
					displayName: 'By ID',
					name: 'id',
					type: 'string',
					placeholder: 'Enter the service name',
				},
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					placeholder: 'Select from the list',
					typeOptions: {
						searchListMethod: 'getDedicatedCephServices',
						searchable: true,
					},
				},
			],
			displayOptions,
		},
		{
			displayName: 'Task ID',
			name: 'taskId',
			type: 'number',
			default: 0,
			required: true,
			description: 'The task identifier',
			displayOptions,
		},
	];
}

/**
 * Executes the Get Task operation.
 *
 * HTTP method: GET
 * Endpoint: /dedicated/ceph/{serviceName}/task/{taskId}
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing task details
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const { value: serviceName } = this.getNodeParameter('serviceName', 0, {
		extractValue: true,
	}) as { value: string };
	const taskId = this.getNodeParameter('taskId', 0) as number;

	const data = (await client.httpGet(
		`/dedicated/ceph/${serviceName}/task/${taskId}`,
	)) as IDataObject;

	return [{ json: data }];
}
