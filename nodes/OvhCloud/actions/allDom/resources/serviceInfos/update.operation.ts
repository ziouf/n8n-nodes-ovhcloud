import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * @brief Update AllDom Service Infos operation for AllDom resource
 *
 * Updates service information for a specific AllDom service:
 * - HTTP PUT request to `/allDom/{serviceName}/serviceInfos` endpoint
 * - Service name parameter is required
 * - Returns updated service information
 */
export function descriptionAllDomServiceInfosUpdate(
	displayOptions: IDisplayOptions,
): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			description:
				'The name of the AllDom service. This can be set manually or selected from the list of services.',
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
					placeholder: 'Select an AllDom service...',
					typeOptions: {
						searchListMethod: 'getAllDomServices',
						searchable: true,
					},
				},
			],
			displayOptions,
		},
	];
}

/**
 * Executes the Update AllDom Service Infos operation.
 *
 * Updates service information for a specific AllDom service.
 *
 * HTTP method: PUT
 * Endpoint: /allDom/{serviceName}/serviceInfos
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing updated service information
 */
export async function executeAllDomServiceInfosUpdate(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, { extractValue: true }) as string;

	const response = (await client.httpPut(`/allDom/${serviceName}/serviceInfos`)) as IDataObject;

	return this.helpers.returnJsonArray(response);
}
