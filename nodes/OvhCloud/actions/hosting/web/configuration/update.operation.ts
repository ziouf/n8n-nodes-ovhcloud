import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * @brief Alter this object properties operation for Web Hosting
 *
 * HTTP PUT request to `/hosting/web/{serviceName}/configuration` endpoint.
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the operation
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [		{
			displayName: '',
			name: '',
			type: 'string',
			default: '',
			required: true,
			description: 'New object properties',
			displayOptions,
		},
	];
}

/**
 * Executes the Alter this object properties operation.
 *
 * HTTP method: PUT
 * Endpoint: /hosting/web/{serviceName}/configuration
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const data = (await client.httpPut(`/hosting/web/${serviceName}/configuration`, { body: {} })) as IDataObject;
	return [{ json: data }];
}
