import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../../transport/ApiClient';

/**
 * @brief Delete Partition Access operation for DedicatedNasha resource
 *
 * Deletes a specific ACL from a partition:
 * - HTTP DELETE request to `/dedicated/nasha/{serviceName}/partition/{partitionName}/access/{ip}` endpoint
 * - Service name, partition name, and IP are required
 * - Returns the deletion result
 */
export function descriptionDedicatedNashaPartitionAccessDelete(
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
			description: 'The name of the partition',
			type: 'string',
			required: true,
			default: '',
			displayOptions,
		},
		{
			displayName: 'IP',
			name: 'ip',
			description: 'The IP address of the ACL to delete',
			type: 'string',
			required: true,
			default: '',
			displayOptions,
		},
	];
}

/**
 * Executes the Delete Partition Access operation.
 *
 * Deletes a specific ACL from a partition.
 *
 * HTTP method: DELETE
 * Endpoint: /dedicated/nasha/{serviceName}/partition/{partitionName}/access/{ip}
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing the deletion result
 */
export async function executeDedicatedNashaPartitionAccessDelete(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, { extractValue: true }) as string;
	const partitionName = this.getNodeParameter('partitionName', 0) as string;
	const ip = this.getNodeParameter('ip', 0) as string;

	const response = (await client.httpDelete(
		`/dedicated/nasha/${serviceName}/partition/${partitionName}/access/${ip}`,
	)) as IDataObject;

	return [{ json: response }];
}
