import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../shared/transport/ApiClient';

/**
 * @brief Create Partition Quota operation for DedicatedNasha resource
 *
 * Sets a quota for a specific partition:
 * - HTTP POST request to `/dedicated/nasha/{serviceName}/partition/{partitionName}/quota` endpoint
 * - Service name, partition name, size, and UID are required
 * - Returns the created quota
 */
export function descriptionDedicatedNashaPartitionQuotaCreate(
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
			displayName: 'Size',
			name: 'size',
			description: 'The quota size',
			type: 'number',
			required: true,
			default: 0,
			displayOptions,
		},
		{
			displayName: 'UID',
			name: 'uid',
			description: 'The UID for the quota',
			type: 'string',
			required: true,
			default: '',
			displayOptions,
		},
	];
}

/**
 * Executes the Create Partition Quota operation.
 *
 * Sets a quota for a specific partition.
 *
 * HTTP method: POST
 * Endpoint: /dedicated/nasha/{serviceName}/partition/{partitionName}/quota
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing the created quota
 */
export async function executeDedicatedNashaPartitionQuotaCreate(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, { extractValue: true }) as string;
	const partitionName = this.getNodeParameter('partitionName', 0) as string;
	const size = this.getNodeParameter('size', 0) as number;
	const uid = this.getNodeParameter('uid', 0) as string;

	const body: IDataObject = { size, uid };

	const response = (await client.httpPost(
		`/dedicated/nasha/${serviceName}/partition/${partitionName}/quota`,
		body,
	)) as IDataObject;

	return [{ json: response }];
}
