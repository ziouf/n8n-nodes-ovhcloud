import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../../shared/transport/ApiClient';

/**
 * @brief Terminate operation for DedicatedNasha resource
 *
 * Requests termination of a specific Dedicated Nasha service:
 * - HTTP POST request to `/dedicated/nasha/{serviceName}/terminate` endpoint
 * - Service name parameter is required
 * - Returns the termination result
 */
export function descriptionDedicatedNashaTerminate(
	displayOptions: IDisplayOptions,
): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			description:
				'The name of the Dedicated Nasha service to terminate. This can be set manually or selected from the list of services.',
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
 * Executes the Terminate operation.
 *
 * Requests termination of a specific Dedicated Nasha service.
 *
 * HTTP method: POST
 * Endpoint: /dedicated/nasha/{serviceName}/terminate
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing the termination result
 */
export async function executeDedicatedNashaTerminate(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, { extractValue: true }) as string;

	const response = (await client.httpPost(
		`/dedicated/nasha/${serviceName}/terminate`,
	)) as IDataObject;

	return [{ json: response }];
}
