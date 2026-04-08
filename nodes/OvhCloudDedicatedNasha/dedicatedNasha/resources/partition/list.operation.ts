import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../shared/transport/ApiClient';

/**
 * @brief List Partitions operation for DedicatedNasha resource
 *
 * Lists all partitions for a specific Dedicated Nasha service:
 * - HTTP GET request to `/dedicated/nasha/{serviceName}/partition` endpoint
 * - Service name parameter is required
 * - Returns list of partition names
 */
export function descriptionDedicatedNashaPartitionList(
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
	];
}

/**
 * Executes the List Partitions operation.
 *
 * Lists all partitions for a specific Dedicated Nasha service.
 *
 * HTTP method: GET
 * Endpoint: /dedicated/nasha/{serviceName}/partition
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing partition names
 */
export async function executeDedicatedNashaPartitionList(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, { extractValue: true }) as string;

	const partitions = (await client.httpGet(
		`/dedicated/nasha/${serviceName}/partition`,
	)) as IDataObject[];

	return this.helpers.returnJsonArray(partitions);
}
