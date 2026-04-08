import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';

/**
 * @brief List Domains operation for Domain resource
 *
 * Retrieves all domains for the authenticated account:
 * - HTTP GET request to `/domain` endpoint
 * - No additional parameters required
 * - Returns list of domain names
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Empty array (no additional UI properties needed)
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'With Details',
			name: 'domainWithDetails',
			type: 'boolean',
			default: false,
			description: 'Whether to include detailed information for each domain',
			displayOptions,
		}
	];
}

/**
 * Executes the List Domains operation.
 *
 * Retrieves all domains for the authenticated account.
 *
 * HTTP method: GET
 * Endpoint: /domain
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing domains
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const withDetails = this.getNodeParameter('domainWithDetails', 0, { extractValue: true, default: false}) as boolean;

	const domainIds = (await client.httpGet('/domain')) as IDataObject[];

	if (!withDetails) {
		return domainIds.map((item) => ({ json: { domain: item } }));
	}

	const domains: INodeExecutionData[] = [];
	for (const domain of domainIds) {
		const details = await client.httpGet(`/domain/${domain}`);
		domains.push({ json: details as IDataObject });
	}
	return domains;
}
