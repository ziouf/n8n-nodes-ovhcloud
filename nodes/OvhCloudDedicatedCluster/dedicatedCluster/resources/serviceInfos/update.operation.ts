import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../shared/transport/ApiClient';

/**
 * @brief Update Dedicated Cluster Service Infos operation
 *
 * Updates service information for a specific Dedicated Cluster service:
 * - HTTP PUT request to `/dedicated/cluster/{serviceName}/serviceInfos` endpoint
 * - Service name parameter is required
 * - Returns updated service information
 */
export function descriptionDedicatedClusterServiceInfosUpdate(
	displayOptions: IDisplayOptions,
): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			description:
				'The name of the Dedicated Cluster service. This can be set manually or selected from the list of services.',
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
 * Executes the Update Dedicated Cluster Service Infos operation.
 *
 * Updates service information for a specific Dedicated Cluster service.
 *
 * HTTP method: PUT
 * Endpoint: /dedicated/cluster/{serviceName}/serviceInfos
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing updated service information
 */
export async function executeDedicatedClusterServiceInfosUpdate(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, { extractValue: true }) as string;

	const response = (await client.httpPut(
		`/dedicated/cluster/${serviceName}/serviceInfos`,
	)) as IDataObject;

	return this.helpers.returnJsonArray(response);
}
