import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../transport/ApiClient';

/**
 * @brief Get Zimbra Service operation for V2 API
 *
 * Retrieves detailed information for a specific Zimbra service:
 * - HTTP GET request to `/v2/zimbra/{serviceName}` endpoint
 * - Service name parameter is required
 * - Returns service details
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the Get Zimbra Service operation
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name/ID',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name or ID of the Zimbra service',
			displayOptions,
		},
	];
}

/**
 * Executes the Get Zimbra Service operation.
 *
 * Retrieves detailed information for a specific Zimbra service.
 *
 * HTTP method: GET
 * Endpoint: /v2/zimbra/{serviceName}
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing service details
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const data = (await client.httpGet(`/v2/zimbra/${serviceName}`)) as IDataObject;
	return [{ json: data }];
}
