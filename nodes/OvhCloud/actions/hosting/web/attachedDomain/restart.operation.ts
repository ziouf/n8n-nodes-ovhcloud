import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * @brief Restart the virtual host of the attached domain operation for Web Hosting
 *
 * HTTP POST request to `/hosting/web/{serviceName}/attachedDomain/{domain}/restart` endpoint.
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the operation
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [		{
			displayName: 'Domain',
			name: 'domain',
			type: 'string',
			default: '',
			required: true,
			description: 'Domain linked (fqdn)',
			displayOptions,
		},
	];
}

/**
 * Executes the Restart the virtual host of the attached domain operation.
 *
 * HTTP method: POST
 * Endpoint: /hosting/web/{serviceName}/attachedDomain/{domain}/restart
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const domain = this.getNodeParameter('domain', 0) as string;
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const data = (await client.httpPost(`/hosting/web/${serviceName}/attachedDomain/${domain}/restart`)) as IDataObject;
	return [{ json: data }];
}
