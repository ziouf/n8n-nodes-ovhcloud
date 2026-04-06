import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../transport/ApiClient';

/**
 * @brief Get details for a Shared CDN operation operation for Web Hosting
 *
 * HTTP GET request to `/hosting/web/{serviceName}/cdn/operation/{id}` endpoint.
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the operation
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [		{
			displayName: 'ID',
			name: 'id',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
	];
}

/**
 * Executes the Get details for a Shared CDN operation operation.
 *
 * HTTP method: GET
 * Endpoint: /hosting/web/{serviceName}/cdn/operation/{id}
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const id = this.getNodeParameter('id', 0) as string;
	const data = (await client.httpGet(`/hosting/web/${serviceName}/cdn/operation/${id}`)) as IDataObject;
	return [{ json: data }];
}
