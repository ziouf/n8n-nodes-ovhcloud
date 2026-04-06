import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * @brief List AllDom Domains operation for AllDom resource
 *
 * Retrieves all domains attached to a specific AllDom service:
 * - HTTP GET request to `/allDom/{serviceName}/domain` endpoint
 * - Service name parameter is required
 * - Optional `domain` query parameter to filter results
 * - Returns list of domain names
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
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
			displayName: 'Domain Filter',
			name: 'domain',
			description: 'Optional filter to narrow down the list of domains',
			type: 'string',
			default: '',
			displayOptions,
		},
	];
}

/**
 * Executes the List AllDom Domains operation.
 *
 * Retrieves all domains attached to a specific AllDom service.
 *
 * HTTP method: GET
 * Endpoint: /allDom/{serviceName}/domain
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing domain names
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, { extractValue: true }) as string;
	const domainFilter = this.getNodeParameter('domain', 0, '') as string;

	const qs: Record<string, string> = {};
	if (domainFilter) {
		qs.domain = domainFilter;
	}

	const domains = (await client.httpGet(`/allDom/${serviceName}/domain`, qs)) as IDataObject[];

	return this.helpers.returnJsonArray(domains);
}
