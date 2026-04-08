import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';

/**
 * @brief Get Location operation for V2 API
 *
 * Retrieves detailed information for a specific location:
 * - HTTP GET request to `/v2/location/{locationId}` endpoint
 * - Location ID parameter is required
 * - Returns location details
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the Get Location operation
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Location Name/ID',
			name: 'locationId',
			type: 'string',
			default: '',
			required: true,
			description: 'The name or ID of the location',
			displayOptions,
		},
	];
}

/**
 * Executes the Get Location operation.
 *
 * Retrieves detailed information for a specific location.
 *
 * HTTP method: GET
 * Endpoint: /v2/location/{locationId}
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing location details
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const locationId = this.getNodeParameter('locationId', 0) as string;
	const data = (await client.httpGet(`/v2/location/${locationId}`)) as IDataObject;
	return [{ json: data }];
}
