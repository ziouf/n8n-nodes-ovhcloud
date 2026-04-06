import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * @brief Create Partition operation for DedicatedNasha resource
 *
 * Creates a new partition on a Dedicated Nasha service:
 * - HTTP POST request to `/dedicated/nasha/{serviceName}/partition` endpoint
 * - Service name, partition name, protocol, and size are required
 * - Partition description is optional
 * - Returns the created partition properties
 */
export function descriptionDedicatedNashaPartitionCreate(
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
			description: 'The name of the partition to create',
			type: 'string',
			required: true,
			default: '',
			displayOptions,
		},
		{
			displayName: 'Protocol',
			name: 'protocol',
			description: 'The protocol to use for the partition',
			type: 'options',
			required: true,
			options: [
				{
					name: 'NFS',
					value: 'NFS',
				},
				{
					name: 'CIFS',
					value: 'CIFS',
				},
				{
					name: 'NFS CIFS',
					value: 'NFS_CIFS',
				},
			],
			default: 'NFS',
			displayOptions,
		},
		{
			displayName: 'Size',
			name: 'size',
			description: 'The size of the partition in GB',
			type: 'number',
			required: true,
			default: 0,
			displayOptions,
		},
		{
			displayName: 'Partition Description',
			name: 'partitionDescription',
			description: 'Optional description for the partition',
			type: 'string',
			default: '',
			displayOptions,
		},
	];
}

/**
 * Executes the Create Partition operation.
 *
 * Creates a new partition on a Dedicated Nasha service.
 *
 * HTTP method: POST
 * Endpoint: /dedicated/nasha/{serviceName}/partition
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing the created partition properties
 */
export async function executeDedicatedNashaPartitionCreate(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, { extractValue: true }) as string;
	const partitionName = this.getNodeParameter('partitionName', 0) as string;
	const protocol = this.getNodeParameter('protocol', 0) as string;
	const size = this.getNodeParameter('size', 0) as number;
	const partitionDescription = this.getNodeParameter('partitionDescription', 0, '') as string;

	const body: IDataObject = { partitionName, protocol, size };
	if (partitionDescription) body.partitionDescription = partitionDescription;

	const response = (await client.httpPost(
		`/dedicated/nasha/${serviceName}/partition`,
		body,
	)) as IDataObject;

	return [{ json: response }];
}
