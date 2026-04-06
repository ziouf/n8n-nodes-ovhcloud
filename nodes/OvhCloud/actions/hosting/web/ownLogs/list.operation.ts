import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * @brief Own Logs linked to your hosting operation for Web Hosting
 *
 * HTTP GET request to `/hosting/web/{serviceName}/ownLogs` endpoint.
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the operation
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [		{
			displayName: 'Fqdn',
			name: 'fqdn',
			type: 'string',
			default: '',
			description: 'Filter the value of fqdn property (like)',
			displayOptions,
		},
	];
}

/**
 * Executes the Own Logs linked to your hosting operation.
 *
 * HTTP method: GET
 * Endpoint: /hosting/web/{serviceName}/ownLogs
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const fqdn = this.getNodeParameter('fqdn', 0) as string;
	const data = (await client.httpGet(`/hosting/web/${serviceName}/ownLogs`, { qs: { fqdn } })) as IDataObject;
	return this.helpers.returnJsonArray(data as unknown as IDataObject[]);
}
