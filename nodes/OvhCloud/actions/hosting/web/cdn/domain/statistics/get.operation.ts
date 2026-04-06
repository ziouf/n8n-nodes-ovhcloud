import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../../transport/ApiClient';

/**
 * @brief Get CDN statistics for a domain operation for Web Hosting
 *
 * HTTP GET request to `/hosting/web/{serviceName}/cdn/domain/{domainName}/statistics` endpoint.
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
		{
			displayName: 'Period',
			name: 'period',
			type: 'string',
			default: '',
			description: 'Period (default is day)',
			displayOptions,
		},
	];
}

/**
 * Executes the Get CDN statistics for a domain operation.
 *
 * HTTP method: GET
 * Endpoint: /hosting/web/{serviceName}/cdn/domain/{domainName}/statistics
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const domainName = this.getNodeParameter('domainName', 0) as string;
	const period = this.getNodeParameter('period', 0) as string;
	const data = (await client.httpGet(`/hosting/web/${serviceName}/cdn/domain/${domainName}/statistics`, { qs: { period } })) as IDataObject;
	return this.helpers.returnJsonArray(data as unknown as IDataObject[]);
}
