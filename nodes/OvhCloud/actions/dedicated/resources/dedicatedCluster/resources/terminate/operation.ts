import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../../transport/ApiClient';

/**
 * @brief Terminate Dedicated Cluster operation
 *
 * Requests termination of a specific Dedicated Cluster service:
 * - HTTP POST request to `/dedicated/cluster/{serviceName}/terminate` endpoint
 * - Service name parameter is required
 * - Returns the termination request result
 */
export function descriptionDedicatedClusterTerminate(
	displayOptions: IDisplayOptions,
): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			description:
				'The name of the Dedicated Cluster service to terminate. This can be set manually or selected from the list of services.',
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
					placeholder: 'Select a Dedicated Cluster service...',
					typeOptions: {
						searchListMethod: 'getDedicatedClusterServices',
						searchable: true,
					},
				},
			],
			displayOptions,
		},
	];
}

/**
 * Executes the Terminate Dedicated Cluster operation.
 *
 * Requests termination of a specific Dedicated Cluster service.
 *
 * HTTP method: POST
 * Endpoint: /dedicated/cluster/{serviceName}/terminate
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing the termination request result
 */
export async function executeDedicatedClusterTerminate(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, { extractValue: true }) as string;

	const response = (await client.httpPost(
		`/dedicated/cluster/${serviceName}/terminate`,
	)) as IDataObject;

	return this.helpers.returnJsonArray(response);
}
