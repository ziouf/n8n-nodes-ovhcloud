import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * @brief  operation for Web Hosting
 *
 * HTTP PUT request to `/hosting/web/{serviceName}/envVar/{key}` endpoint.
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the operation
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [		{
			displayName: 'Key',
			name: 'key',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
		{
			displayName: '',
			name: '',
			type: 'string',
			default: '',
			required: true,
			description: 'Request Body',
			displayOptions,
		},
	];
}

/**
 * Executes the  operation.
 *
 * HTTP method: PUT
 * Endpoint: /hosting/web/{serviceName}/envVar/{key}
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const key = this.getNodeParameter('key', 0) as string;
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const data = (await client.httpPut(`/hosting/web/${serviceName}/envVar/${key}`, { body: {} })) as IDataObject;
	return [{ json: data }];
}
