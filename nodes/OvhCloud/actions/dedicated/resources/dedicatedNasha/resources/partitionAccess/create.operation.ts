import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../../transport/ApiClient';

/**
 * @brief Create Partition Access operation for DedicatedNasha resource
 *
 * Adds an ACL to a specific partition:
 * - HTTP POST request to `/dedicated/nasha/{serviceName}/partition/{partitionName}/access` endpoint
 * - Service name, partition name, and IP are required
 * - Type (readonly/readwrite) and ACL description are optional
 * - Returns the created ACL
 */
export function descriptionDedicatedNashaPartitionAccessCreate(
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
			description: 'The IP address to add to the ACL',
			type: 'string',
			required: true,
			default: '',
			displayOptions,
		},
		{
			displayName: 'Type',
			name: 'type',
			description: 'The access type for the ACL',
			type: 'options',
			options: [
				{
					name: 'Read Only',
					value: 'readonly',
				},
				{
					name: 'Read Write',
					value: 'readwrite',
				},
			],
			default: 'readwrite',
			displayOptions,
		},
		{
			displayName: 'ACL Description',
			name: 'aclDescription',
			description: 'Optional description for the ACL',
			type: 'string',
			default: '',
			displayOptions,
		},
	];
}

/**
 * Executes the Create Partition Access operation.
 *
 * Adds an ACL to a specific partition.
 *
 * HTTP method: POST
 * Endpoint: /dedicated/nasha/{serviceName}/partition/{partitionName}/access
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing the created ACL
 */
export async function executeDedicatedNashaPartitionAccessCreate(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, { extractValue: true }) as string;
	const partitionName = this.getNodeParameter('partitionName', 0) as string;
	const ip = this.getNodeParameter('ip', 0) as string;
	const type = this.getNodeParameter('type', 0, '') as string;
	const aclDescription = this.getNodeParameter('aclDescription', 0, '') as string;

	const body: IDataObject = { ip };
	if (type) body.type = type;
	if (aclDescription) body.aclDescription = aclDescription;

	const response = (await client.httpPost(
		`/dedicated/nasha/${serviceName}/partition/${partitionName}/access`,
		body,
	)) as IDataObject;

	return [{ json: response }];
}
