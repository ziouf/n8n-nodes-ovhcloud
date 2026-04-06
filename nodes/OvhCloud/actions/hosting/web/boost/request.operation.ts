import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * @brief Request a boost operation for Web Hosting
 *
 * HTTP POST request to `/hosting/web/{serviceName}/requestBoost` endpoint.
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
			description: 'Request Body',
			displayOptions,
		},
	];
}

/**
 * Executes the Request a boost operation.
 *
 * HTTP method: POST
 * Endpoint: /hosting/web/{serviceName}/requestBoost
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const data = (await client.httpPost(`/hosting/web/${serviceName}/requestBoost`, { body: {} })) as IDataObject;
	return [{ json: data }];
}
