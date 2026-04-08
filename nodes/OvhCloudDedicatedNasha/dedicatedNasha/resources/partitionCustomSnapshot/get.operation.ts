import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../shared/transport/ApiClient';

/**
 * @brief Get Partition Custom Snapshot operation for DedicatedNasha resource
 *
 * Retrieves details of a specific custom snapshot:
 * - HTTP GET request to `/dedicated/nasha/{serviceName}/partition/{partitionName}/customSnapshot/{name}` endpoint
 * - Service name, partition name, and snapshot name are required
 * - Returns snapshot details
 */
export function descriptionDedicatedNashaPartitionCustomSnapshotGet(
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
			displayName: 'Snapshot Name',
			name: 'name',
			description: 'The name of the custom snapshot to retrieve',
			type: 'string',
			required: true,
			default: '',
			displayOptions,
		},
	];
}

/**
 * Executes the Get Partition Custom Snapshot operation.
 *
 * Retrieves details of a specific custom snapshot.
 *
 * HTTP method: GET
 * Endpoint: /dedicated/nasha/{serviceName}/partition/{partitionName}/customSnapshot/{name}
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing snapshot details
 */
export async function executeDedicatedNashaPartitionCustomSnapshotGet(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, { extractValue: true }) as string;
	const partitionName = this.getNodeParameter('partitionName', 0) as string;
	const name = this.getNodeParameter('name', 0) as string;

	const response = (await client.httpGet(
		`/dedicated/nasha/${serviceName}/partition/${partitionName}/customSnapshot/${name}`,
	)) as IDataObject;

	return this.helpers.returnJsonArray(response);
}
