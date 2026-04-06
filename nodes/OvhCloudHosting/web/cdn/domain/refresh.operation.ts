import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../shared/transport/ApiClient';

/**
 * @brief Trigger a refresh for a domain operation for Web Hosting
 *
 * HTTP POST request to `/hosting/web/{serviceName}/cdn/domain/{domainName}/refresh` endpoint.
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the operation
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [		{
			displayName: 'Domain Name',
			name: 'domainName',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
	];
}

/**
 * Executes the Trigger a refresh for a domain operation.
 *
 * HTTP method: POST
 * Endpoint: /hosting/web/{serviceName}/cdn/domain/{domainName}/refresh
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const domainName = this.getNodeParameter('domainName', 0) as string;
	const data = (await client.httpPost(`/hosting/web/${serviceName}/cdn/domain/${domainName}/refresh`)) as IDataObject;
	return [{ json: data }];
}
