import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../transport/ApiClient';

/**
 * @brief Get Partner operation for Partner resource
 *
 * Retrieves detailed information for a specific partner:
 * - HTTP GET request to `/partner/{partnerId}` endpoint
 * - Partner ID parameter is required
 * - Returns partner details
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the Get Partner operation
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Partner ID',
			name: 'partnerId',
			type: 'string',
			default: '',
			required: true,
			description: 'The ID of the partner',
			displayOptions,
		},
	];
}

/**
 * Executes the Get Partner operation.
 *
 * Retrieves detailed information for a specific partner.
 *
 * HTTP method: GET
 * Endpoint: /partner/{partnerId}
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing partner details
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const partnerId = this.getNodeParameter('partnerId', 0) as string;
	const data = (await client.httpGet(`/partner/${partnerId}`)) as IDataObject;
	return [{ json: data }];
}
