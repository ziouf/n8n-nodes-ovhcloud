import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

/**
 * @brief Get IAM Resource operation for V2 API
 *
 * Retrieves detailed information for a specific IAM resource:
 * - HTTP GET request to `/v2/iam/{resourceId}` endpoint
 * - Resource ID parameter is required
 * - Returns resource details
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the Get IAM Resource operation
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Resource Name/ID',
			name: 'resourceId',
			type: 'string',
			default: '',
			required: true,
			description: 'The name or ID of the IAM resource',
			displayOptions,
		},
	];
}

/**
 * Executes the Get IAM Resource operation.
 *
 * Retrieves detailed information for a specific IAM resource.
 *
 * HTTP method: GET
 * Endpoint: /v2/iam/{resourceId}
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing resource details
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const resourceId = this.getNodeParameter('resourceId', 0) as string;
	const data = (await client.httpGet(`/v2/iam/${resourceId}`)) as IDataObject;
	return [{ json: data }];
}
