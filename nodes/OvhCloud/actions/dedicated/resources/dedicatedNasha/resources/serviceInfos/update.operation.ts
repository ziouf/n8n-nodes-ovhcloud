import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../../transport/ApiClient';

/**
 * @brief Update Dedicated Nasha Service Infos operation for DedicatedNasha resource
 *
 * Updates service information for a specific Dedicated Nasha service:
 * - HTTP PUT request to `/dedicated/nasha/{serviceName}/serviceInfos` endpoint
 * - Service name parameter is required
 * - Returns updated service information
 */
export function descriptionDedicatedNashaServiceInfosUpdate(
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
 * Executes the Update Dedicated Nasha Service Infos operation.
 *
 * Updates service information for a specific Dedicated Nasha service.
 *
 * HTTP method: PUT
 * Endpoint: /dedicated/nasha/{serviceName}/serviceInfos
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing updated service information
 */
export async function executeDedicatedNashaServiceInfosUpdate(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, { extractValue: true }) as string;

	const response = (await client.httpPut(
		`/dedicated/nasha/${serviceName}/serviceInfos`,
	)) as IDataObject;

	return this.helpers.returnJsonArray(response);
}
