import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../../shared/transport/ApiClient';

/**
 * @brief Update an option on a domain operation for Web Hosting
 *
 * HTTP PUT request to `/hosting/web/{serviceName}/cdn/domain/{domainName}/option/{optionName}` endpoint.
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
			displayName: 'Option Name',
			name: 'optionName',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
		{
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
 * Executes the Update an option on a domain operation.
 *
 * HTTP method: PUT
 * Endpoint: /hosting/web/{serviceName}/cdn/domain/{domainName}/option/{optionName}
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const domainName = this.getNodeParameter('domainName', 0) as string;
	const optionName = this.getNodeParameter('optionName', 0) as string;
	const data = (await client.httpPut(`/hosting/web/${serviceName}/cdn/domain/${domainName}/option/${optionName}`, { body: {} })) as IDataObject;
	return [{ json: data }];
}
