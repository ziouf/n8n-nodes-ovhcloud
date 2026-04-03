import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../transport/ApiClient';

/**
 * @brief Get Domain operation for Domain resource
 *
 * Retrieves detailed information for a specific domain:
 * - HTTP GET request to `/domain/{domainName}` endpoint
 * - Domain name parameter is required
 * - Returns domain details
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the Get Domain operation
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Domain Name',
			name: 'domainName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the domain',
			displayOptions,
		},
	];
}

/**
 * Executes the Get Domain operation.
 *
 * Retrieves detailed information for a specific domain.
 *
 * HTTP method: GET
 * Endpoint: /domain/{domainName}
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing domain details
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const domainName = this.getNodeParameter('domainName', 0) as string;
	const data = (await client.httpGet(`/domain/${domainName}`)) as IDataObject;
	return [{ json: data }];
}
