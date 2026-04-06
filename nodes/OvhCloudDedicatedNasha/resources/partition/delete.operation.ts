import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * @brief Delete Partition operation for DedicatedNasha resource
 *
 * Deletes a specific partition:
 * - HTTP DELETE request to `/dedicated/nasha/{serviceName}/partition/{partitionName}` endpoint
 * - Service name and partition name are required
 * - Returns the deletion result
 */
export function descriptionDedicatedNashaPartitionDelete(
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
			displayName: 'Partition Name',
			name: 'partitionName',
			description: 'The name of the partition to delete',
			type: 'string',
			required: true,
			default: '',
			displayOptions,
		},
	];
}

/**
 * Executes the Delete Partition operation.
 *
 * Deletes a specific partition.
 *
 * HTTP method: DELETE
 * Endpoint: /dedicated/nasha/{serviceName}/partition/{partitionName}
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing the deletion result
 */
export async function executeDedicatedNashaPartitionDelete(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, { extractValue: true }) as string;
	const partitionName = this.getNodeParameter('partitionName', 0) as string;

	const response = (await client.httpDelete(
		`/dedicated/nasha/${serviceName}/partition/${partitionName}`,
	)) as IDataObject;

	return [{ json: response }];
}
