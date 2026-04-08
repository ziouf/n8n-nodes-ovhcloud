import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../shared/transport/ApiClient';

/**
 * @brief Get Partition Quota operation for DedicatedNasha resource
 *
 * Retrieves details of a specific quota:
 * - HTTP GET request to `/dedicated/nasha/{serviceName}/partition/{partitionName}/quota/{uid}` endpoint
 * - Service name, partition name, and UID are required
 * - Returns quota details
 */
export function descriptionDedicatedNashaPartitionQuotaGet(
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
			displayName: 'UID',
			name: 'uid',
			description: 'The UID of the quota to retrieve',
			type: 'string',
			required: true,
			default: '',
			displayOptions,
		},
	];
}

/**
 * Executes the Get Partition Quota operation.
 *
 * Retrieves details of a specific quota.
 *
 * HTTP method: GET
 * Endpoint: /dedicated/nasha/{serviceName}/partition/{partitionName}/quota/{uid}
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing quota details
 */
export async function executeDedicatedNashaPartitionQuotaGet(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, { extractValue: true }) as string;
	const partitionName = this.getNodeParameter('partitionName', 0) as string;
	const uid = this.getNodeParameter('uid', 0) as string;

	const response = (await client.httpGet(
		`/dedicated/nasha/${serviceName}/partition/${partitionName}/quota/${uid}`,
	)) as IDataObject;

	return this.helpers.returnJsonArray(response);
}
