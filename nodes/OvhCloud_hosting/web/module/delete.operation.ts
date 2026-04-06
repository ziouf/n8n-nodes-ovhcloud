import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * @brief Get this object properties operation for Web Hosting
 *
 * HTTP GET request to `/hosting/web/{serviceName}/module/{id}` endpoint.
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
			description: 'Installation ID',
			displayOptions,
		},
	];
}

/**
 * Executes the Get this object properties operation.
 *
 * HTTP method: GET
 * Endpoint: /hosting/web/{serviceName}/module/{id}
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const id = this.getNodeParameter('id', 0) as string;
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const data = (await client.httpGet(`/hosting/web/${serviceName}/module/${id}`)) as IDataObject;
	return [{ json: data }];
}
