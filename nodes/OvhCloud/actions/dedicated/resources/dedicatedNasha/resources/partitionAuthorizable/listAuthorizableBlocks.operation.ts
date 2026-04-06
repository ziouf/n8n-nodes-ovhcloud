import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../../transport/ApiClient';

/**
 * @brief List Partition Authorizable Blocks operation for DedicatedNasha resource
 *
 * Retrieves authorizable blocks for a specific partition:
 * - HTTP GET request to `/dedicated/nasha/{serviceName}/partition/{partitionName}/authorizableBlocks` endpoint
 * - Service name and partition name are required
 * - Returns list of authorizable blocks
 */
export function descriptionDedicatedNashaPartitionAuthorizableBlocks(
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
	];
}

/**
 * Executes the List Partition Authorizable Blocks operation.
 *
 * Retrieves authorizable blocks for a specific partition.
 *
 * HTTP method: GET
 * Endpoint: /dedicated/nasha/{serviceName}/partition/{partitionName}/authorizableBlocks
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing authorizable blocks
 */
export async function executeDedicatedNashaPartitionAuthorizableBlocks(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, { extractValue: true }) as string;
	const partitionName = this.getNodeParameter('partitionName', 0) as string;

	const blocks = (await client.httpGet(
		`/dedicated/nasha/${serviceName}/partition/${partitionName}/authorizableBlocks`,
	)) as IDataObject[];

	return this.helpers.returnJsonArray(blocks);
}
