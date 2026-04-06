import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * @brief Get subscription details operation for Web Hosting
 *
 * HTTP GET request to `/hosting/web/{serviceName}/log/subscription/{subscriptionId}` endpoint.
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the operation
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [		{
			displayName: 'Subscription ID',
			name: 'subscriptionId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
	];
}

/**
 * Executes the Get subscription details operation.
 *
 * HTTP method: GET
 * Endpoint: /hosting/web/{serviceName}/log/subscription/{subscriptionId}
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const subscriptionId = this.getNodeParameter('subscriptionId', 0) as string;
	const data = (await client.httpGet(`/hosting/web/${serviceName}/log/subscription/${subscriptionId}`)) as IDataObject;
	return [{ json: data }];
}
