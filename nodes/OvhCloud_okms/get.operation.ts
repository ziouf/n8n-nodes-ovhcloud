import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';

/**
 * @brief Get OKMS Key operation for V2 API
 *
 * Retrieves detailed information for a specific OKMS key:
 * - HTTP GET request to `/v2/okms/{keyId}` endpoint
 * - Key ID parameter is required
 * - Returns key details
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the Get OKMS Key operation
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Key Name/ID',
			name: 'keyId',
			type: 'string',
			default: '',
			required: true,
			description: 'The name or ID of the OKMS key',
			displayOptions,
		},
	];
}

/**
 * Executes the Get OKMS Key operation.
 *
 * Retrieves detailed information for a specific OKMS key.
 *
 * HTTP method: GET
 * Endpoint: /v2/okms/{keyId}
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing key details
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const keyId = this.getNodeParameter('keyId', 0) as string;
	const data = (await client.httpGet(`/v2/okms/${keyId}`)) as IDataObject;
	return [{ json: data }];
}
