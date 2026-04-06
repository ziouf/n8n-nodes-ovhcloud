import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../shared/transport/ApiClient';

/**
 * @brief Get Use operation for DedicatedNasha resource
 *
 * Retrieves NAS usage statistics for a specific Dedicated Nasha service:
 * - HTTP GET request to `/dedicated/nasha/{serviceName}/use` endpoint
 * - Service name and type (size/used/usedbysnapshots) are required
 * - Returns usage statistics
 */
export function descriptionDedicatedNashaUse(displayOptions: IDisplayOptions): INodeProperties[] {
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
			displayName: 'Type',
			name: 'type',
			description: 'The type of usage statistics to retrieve',
			type: 'options',
			required: true,
			options: [
				{
					name: 'Size',
					value: 'size',
					description: 'Total size of the NAS',
				},
				{
					name: 'Used',
					value: 'used',
					description: 'Used space on the NAS',
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
 * Executes the Get Use operation.
 *
 * Retrieves NAS usage statistics for a specific Dedicated Nasha service.
 *
 * HTTP method: GET
 * Endpoint: /dedicated/nasha/{serviceName}/use
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing usage statistics
 */
export async function executeDedicatedNashaUse(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, { extractValue: true }) as string;
	const type = this.getNodeParameter('type', 0) as string;

	const qs: IDataObject = { type };

	const response = (await client.httpGet(`/dedicated/nasha/${serviceName}/use`, qs)) as IDataObject;

	return this.helpers.returnJsonArray(response);
}
