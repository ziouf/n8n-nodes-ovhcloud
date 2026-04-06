import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../../shared/transport/ApiClient';

/**
 * @brief Create Partition Snapshot operation for DedicatedNasha resource
 *
 * Schedules a new snapshot for a partition:
 * - HTTP POST request to `/dedicated/nasha/{serviceName}/partition/{partitionName}/snapshot` endpoint
 * - Service name, partition name, and snapshot type are required
 * - Returns the scheduled snapshot
 */
export function descriptionDedicatedNashaPartitionSnapshotCreate(
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
			displayName: 'Snapshot Type',
			name: 'snapshotType',
			description: 'The type of snapshot to schedule',
			type: 'options',
			required: true,
			options: [
				{
					name: 'Day 1',
					value: 'day-1',
				},
				{
					name: 'Day 2',
					value: 'day-2',
				},
				{
					name: 'Day 3',
					value: 'day-3',
				},
				{
					name: 'Day 7',
					value: 'day-7',
				},
				{
					name: 'Hour 1',
					value: 'hour-1',
				},
				{
					name: 'Hour 6',
					value: 'hour-6',
				},
			],
			default: 'day-1',
			displayOptions,
		},
	];
}

/**
 * Executes the Create Partition Snapshot operation.
 *
 * Schedules a new snapshot for a partition.
 *
 * HTTP method: POST
 * Endpoint: /dedicated/nasha/{serviceName}/partition/{partitionName}/snapshot
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing the scheduled snapshot
 */
export async function executeDedicatedNashaPartitionSnapshotCreate(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, { extractValue: true }) as string;
	const partitionName = this.getNodeParameter('partitionName', 0) as string;
	const snapshotType = this.getNodeParameter('snapshotType', 0) as string;

	const body: IDataObject = { snapshotType };

	const response = (await client.httpPost(
		`/dedicated/nasha/${serviceName}/partition/${partitionName}/snapshot`,
		body,
	)) as IDataObject;

	return [{ json: response }];
}
