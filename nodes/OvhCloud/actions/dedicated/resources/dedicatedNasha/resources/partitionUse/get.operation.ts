import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../../transport/ApiClient';

/**
 * @brief Get Partition Use operation for DedicatedNasha resource
 *
 * Retrieves usage statistics for a specific partition:
 * - HTTP GET request to `/dedicated/nasha/{serviceName}/partition/{partitionName}/use` endpoint
 * - Service name, partition name, and type (size/used/usedbysnapshots) are required
 * - Returns partition usage statistics
 */
export function descriptionDedicatedNashaPartitionUse(
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
			displayName: 'Type',
			name: 'type',
			description: 'The type of usage statistics to retrieve',
			type: 'options',
			required: true,
			options: [
				{
					name: 'Size',
					value: 'size',
					description: 'Total size of the partition',
				},
				{
					name: 'Used',
					value: 'used',
					description: 'Used space on the partition',
				},
				{
					name: 'Used By Snapshots',
					value: 'usedbysnapshots',
					description: 'Space used by snapshots',
				},
			],
			default: 'size',
			displayOptions,
		},
	];
}

/**
 * Executes the Get Partition Use operation.
 *
 * Retrieves usage statistics for a specific partition.
 *
 * HTTP method: GET
 * Endpoint: /dedicated/nasha/{serviceName}/partition/{partitionName}/use
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing partition usage statistics
 */
export async function executeDedicatedNashaPartitionUse(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, { extractValue: true }) as string;
	const partitionName = this.getNodeParameter('partitionName', 0) as string;
	const type = this.getNodeParameter('type', 0) as string;

	const qs: IDataObject = { type };

	const response = (await client.httpGet(
		`/dedicated/nasha/${serviceName}/partition/${partitionName}/use`,
		qs,
	)) as IDataObject;

	return this.helpers.returnJsonArray(response);
}
