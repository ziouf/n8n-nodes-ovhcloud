import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../transport/ApiClient';

/**
 * @brief Get Email Domain operation for Email resource
 *
 * Retrieves detailed information for a specific email domain:
 * - HTTP GET request to `/email/domain/{domainName}` endpoint
 * - Domain name parameter is required
 * - Returns domain details including state, plan, options, redirects, MX records, etc.
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the Get Email Domain operation
 *
 * @example
 * // Input configuration:
 * // domainName = 'example.com'
 * // Output: Domain details with state, plan, options, redirects, MX records, etc.
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Domain Name',
			name: 'domainName',
			type: 'resourceLocator',
			default: {
				mode: 'list',
				value: '',
			},
			required: true,
			modes: [
				{
					displayName: 'By ID',
					name: 'id',
					type: 'string',
					placeholder: 'Enter the domain name',
				},
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					placeholder: 'Select from the list',
					typeOptions: {
						searchListMethod: 'getEmailDomains',
						searchable: true,
					},
				},
			],
			displayOptions,
		},
	];
}

/**
 * Executes the Get Email Domain operation.
 *
 * Retrieves detailed information for a specific email domain.
 *
 * HTTP method: GET
 * Endpoint: /email/domain/{domainName.value}
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing domain details
 *
 * @example
 * // Input configuration:
 * // domainName = 'example.com'
 * // Output: Domain details with state, plan, options, redirects, MX records, etc.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const { value: domainName } = this.getNodeParameter('domainName', 0, { extractValue: true }) as {
		value: string;
	};
	const data = (await client.httpGet(`/email/domain/${domainName}`)) as IDataObject;
	return [{ json: data }];
}
