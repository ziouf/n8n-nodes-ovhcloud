import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../transport/ApiClient';

/**
 * @brief Get OverTheBox Service operation for OverTheBox resource
 *
 * Retrieves detailed information for a specific OverTheBox service:
 * - HTTP GET request to `/overTheBox/{serviceName}` endpoint
 * - Service name parameter is required
 * - Returns OverTheBox service details
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the Get OverTheBox Service operation
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the OverTheBox service',
			displayOptions,
		},
	];
}

/**
 * Executes the Get OverTheBox Service operation.
 *
 * Retrieves detailed information for a specific OverTheBox service.
 *
 * HTTP method: GET
 * Endpoint: /overTheBox/{serviceName}
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing OverTheBox service details
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const data = (await client.httpGet(`/overTheBox/${serviceName}`)) as IDataObject;
	return [{ json: data }];
}
