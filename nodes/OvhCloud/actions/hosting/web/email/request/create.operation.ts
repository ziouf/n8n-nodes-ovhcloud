import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../transport/ApiClient';

/**
 * @brief Request specific operation for your email operation for Web Hosting
 *
 * HTTP POST request to `/hosting/web/{serviceName}/email/request` endpoint.
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the operation
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [		{
			displayName: 'Action',
			name: 'action',
			type: 'string',
			default: '',
			required: true,
			description: 'Action you want to request',
			displayOptions,
		},
	];
}

/**
 * Executes the Request specific operation for your email operation.
 *
 * HTTP method: POST
 * Endpoint: /hosting/web/{serviceName}/email/request
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const action = this.getNodeParameter('action', 0) as string;
	const data = (await client.httpPost(`/hosting/web/${serviceName}/email/request`, { body: { action: action } })) as IDataObject;
	return [{ json: data }];
}
