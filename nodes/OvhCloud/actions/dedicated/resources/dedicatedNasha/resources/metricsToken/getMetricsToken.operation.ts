import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../../transport/ApiClient';

/**
 * @brief Get Metrics Token operation for DedicatedNasha resource
 *
 * Retrieves the metrics read token for a specific Dedicated Nasha service:
 * - HTTP GET request to `/dedicated/nasha/{serviceName}/metricsToken` endpoint
 * - Service name parameter is required
 * - Returns the metrics read token
 */
export function descriptionDedicatedNashaMetricsToken(
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
 * Executes the Get Metrics Token operation.
 *
 * Retrieves the metrics read token for a specific Dedicated Nasha service.
 *
 * HTTP method: GET
 * Endpoint: /dedicated/nasha/{serviceName}/metricsToken
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing the metrics token
 */
export async function executeDedicatedNashaMetricsToken(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, { extractValue: true }) as string;

	const response = (await client.httpGet(
		`/dedicated/nasha/${serviceName}/metricsToken`,
	)) as IDataObject;

	return this.helpers.returnJsonArray(response);
}
