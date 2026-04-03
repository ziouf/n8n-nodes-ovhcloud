import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../transport/ApiClient';

/**
 * @brief Get Dedicated Server operation for Dedicated resource
 *
 * Retrieves detailed information for a specific dedicated server:
 * - HTTP GET request to `/dedicated/server/{serverName}` endpoint
 * - Server name parameter is required
 * - Returns server details
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the Get Dedicated Server operation
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Server Name',
			name: 'serverName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the dedicated server',
			displayOptions,
		},
	];
}

/**
 * Executes the Get Dedicated Server operation.
 *
 * Retrieves detailed information for a specific dedicated server.
 *
 * HTTP method: GET
 * Endpoint: /dedicated/server/{serverName}
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing server details
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serverName = this.getNodeParameter('serverName', 0) as string;
	const data = (await client.httpGet(`/dedicated/server/${serverName}`)) as IDataObject;
	return [{ json: data }];
}
