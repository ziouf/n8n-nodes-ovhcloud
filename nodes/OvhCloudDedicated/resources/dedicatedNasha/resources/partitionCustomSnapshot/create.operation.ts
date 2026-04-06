import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../../shared/transport/ApiClient';

/**
 * @brief Create Partition Custom Snapshot operation for DedicatedNasha resource
 *
 * Creates a new custom snapshot for a partition:
 * - HTTP POST request to `/dedicated/nasha/{serviceName}/partition/{partitionName}/customSnapshot` endpoint
 * - Service name, partition name, and snapshot name are required
 * - Expiration date is optional
 * - Returns the created snapshot
 */
export function descriptionDedicatedNashaPartitionCustomSnapshotCreate(
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
			description: 'The name of the custom snapshot to create',
			type: 'string',
			required: true,
			default: '',
			displayOptions,
		},
		{
			displayName: 'Expiration',
			name: 'expiration',
			description: 'Optional expiration date for the snapshot (ISO 8601 format)',
			type: 'string',
			default: '',
			displayOptions,
		},
	];
}

/**
 * Executes the Create Partition Custom Snapshot operation.
 *
 * Creates a new custom snapshot for a partition.
 *
 * HTTP method: POST
 * Endpoint: /dedicated/nasha/{serviceName}/partition/{partitionName}/customSnapshot
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing the created snapshot
 */
export async function executeDedicatedNashaPartitionCustomSnapshotCreate(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, { extractValue: true }) as string;
	const partitionName = this.getNodeParameter('partitionName', 0) as string;
	const name = this.getNodeParameter('name', 0) as string;
	const expiration = this.getNodeParameter('expiration', 0, '') as string;

	const body: IDataObject = { name };
	if (expiration) body.expiration = expiration;

	const response = (await client.httpPost(
		`/dedicated/nasha/${serviceName}/partition/${partitionName}/customSnapshot`,
		body,
	)) as IDataObject;

	return [{ json: response }];
}
