import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * @brief Get a temporary token to access the your web hosting logs interface operation for Web Hosting
 *
 * HTTP GET request to `/hosting/web/{serviceName}/userLogsToken` endpoint.
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the operation
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [		{
			displayName: 'Attached Domain',
			name: 'attachedDomain',
			type: 'string',
			default: '',
			description: 'Specific attached domain to be included in the scope of your token',
			displayOptions,
		},
		{
			displayName: 'Remote Check',
			name: 'remoteCheck',
			type: 'string',
			default: '',
			description: 'Whether to limit the use of the token to the remote IPv4 of API caller',
			displayOptions,
		},
		{
			displayName: 'Ttl',
			name: 'ttl',
			type: 'string',
			default: '',
			description: 'Expiration of your token (in seconds)',
			displayOptions,
		},
	];
}

/**
 * Executes the Get a temporary token to access the your web hosting logs interface operation.
 *
 * HTTP method: GET
 * Endpoint: /hosting/web/{serviceName}/userLogsToken
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const attachedDomain = this.getNodeParameter('attachedDomain', 0) as string;
	const remoteCheck = this.getNodeParameter('remoteCheck', 0) as string;
	const ttl = this.getNodeParameter('ttl', 0) as string;
	const data = (await client.httpGet(`/hosting/web/${serviceName}/userLogsToken`, { qs: { attachedDomain, remoteCheck, ttl } })) as IDataObject;
	return [{ json: data }];
}
