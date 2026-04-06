import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * @brief Get Partition Access operation for DedicatedNasha resource
 *
 * Retrieves details of a specific ACL:
 * - HTTP GET request to `/dedicated/nasha/{serviceName}/partition/{partitionName}/access/{ip}` endpoint
 * - Service name, partition name, and IP are required
 * - Returns ACL details
 */
export function descriptionDedicatedNashaPartitionAccessGet(
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
			description: 'The IP address of the ACL to retrieve',
			type: 'string',
			required: true,
			default: '',
			displayOptions,
		},
	];
}

/**
 * Executes the Get Partition Access operation.
 *
 * Retrieves details of a specific ACL.
 *
 * HTTP method: GET
 * Endpoint: /dedicated/nasha/{serviceName}/partition/{partitionName}/access/{ip}
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing ACL details
 */
export async function executeDedicatedNashaPartitionAccessGet(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, { extractValue: true }) as string;
	const partitionName = this.getNodeParameter('partitionName', 0) as string;
	const ip = this.getNodeParameter('ip', 0) as string;

	const response = (await client.httpGet(
		`/dedicated/nasha/${serviceName}/partition/${partitionName}/access/${ip}`,
	)) as IDataObject;

	return this.helpers.returnJsonArray(response);
}
