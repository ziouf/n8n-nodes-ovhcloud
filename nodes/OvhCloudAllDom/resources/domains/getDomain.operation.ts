import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * @brief Get AllDom Domain operation for AllDom resource
 *
 * Retrieves properties of a specific domain attached to an AllDom service:
 * - HTTP GET request to `/allDom/{serviceName}/domain/{domain}` endpoint
 * - Service name and domain parameters are required
 * - Returns domain properties
 */
export function descriptionAllDomDomainsGetDomain(
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
					placeholder: 'Select a service...',
					typeOptions: {
						searchListMethod: 'getAllDomServices',
						searchable: true,
					},
				},
			],
			displayOptions,
		},
		{
			displayName: 'Domain',
			name: 'domain',
			description: 'The domain to retrieve properties for',
			type: 'string',
			required: true,
			default: '',
			displayOptions,
		},
	];
}

/**
 * Executes the Get AllDom Domain operation.
 *
 * Retrieves properties of a specific domain attached to an AllDom service.
 *
 * HTTP method: GET
 * Endpoint: /allDom/{serviceName}/domain/{domain}
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing domain properties
 */
export async function executeAllDomDomainsGetDomain(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, { extractValue: true }) as string;
	const domain = this.getNodeParameter('domain', 0) as string;

	const response = (await client.httpGet(`/allDom/${serviceName}/domain/${domain}`)) as IDataObject;

	return this.helpers.returnJsonArray(response);
}
