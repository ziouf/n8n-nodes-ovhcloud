import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * @brief Get AllDom Service Infos operation for AllDom resource
 *
 * Retrieves service information for a specific AllDom service:
 * - HTTP GET request to `/allDom/{serviceName}/serviceInfos` endpoint
 * - Service name parameter is required
 * - Returns service information
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			description:
				'The name of the AllDom service to retrieve. This can be set manually or selected from the list of services.',
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
 * Executes the Get AllDom Service Infos operation.
 *
 * Retrieves service information for a specific AllDom service.
 *
 * HTTP method: GET
 * Endpoint: /allDom/{serviceName}/serviceInfos
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing service information
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, { extractValue: true }) as string;
	const serviceInfos = (await client.httpGet(`/allDom/${serviceName}/serviceInfos`)) as IDataObject;

	return this.helpers.returnJsonArray(serviceInfos);
}
