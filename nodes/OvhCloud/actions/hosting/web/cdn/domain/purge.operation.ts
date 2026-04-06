import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../transport/ApiClient';

/**
 * @brief Flush cache content on CDN for a domain operation for Web Hosting
 *
 * HTTP POST request to `/hosting/web/{serviceName}/cdn/domain/{domainName}/purge` endpoint.
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
			displayName: 'Pattern',
			name: 'pattern',
			type: 'string',
			default: '',
			description: 'Purge pattern',
			displayOptions,
		},
		{
			displayName: 'Pattern Type',
			name: 'patternType',
			type: 'string',
			default: '',
			description: 'Purge Pattern Type (default is regex)',
			displayOptions,
		},
	];
}

/**
 * Executes the Flush cache content on CDN for a domain operation.
 *
 * HTTP method: POST
 * Endpoint: /hosting/web/{serviceName}/cdn/domain/{domainName}/purge
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const domainName = this.getNodeParameter('domainName', 0) as string;
	const data = (await client.httpPost(`/hosting/web/${serviceName}/cdn/domain/${domainName}/purge`)) as IDataObject;
	return [{ json: data }];
}
