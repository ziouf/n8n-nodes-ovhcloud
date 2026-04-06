import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * @brief Create an attached domain operation for Web Hosting
 *
 * HTTP POST request to `/hosting/web/{serviceName}/attachedDomain` endpoint.
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
 * Executes the Create an attached domain operation.
 *
 * HTTP method: POST
 * Endpoint: /hosting/web/{serviceName}/attachedDomain
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const data = (await client.httpPost(`/hosting/web/${serviceName}/attachedDomain`, { body: {} })) as IDataObject;
	return [{ json: data }];
}
