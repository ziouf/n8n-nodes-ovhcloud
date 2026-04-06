import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../transport/ApiClient';

/**
 * @brief Generate URL to logs archive operation for Web Hosting
 *
 * HTTP GET request to `/hosting/web/{serviceName}/cdn/domain/{domainName}/logs` endpoint.
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
			displayName: 'Date',
			name: 'date',
			type: 'string',
			default: '',
			description: 'Logs date (default is yesterday)',
			displayOptions,
		},
	];
}

/**
 * Executes the Generate URL to logs archive operation.
 *
 * HTTP method: GET
 * Endpoint: /hosting/web/{serviceName}/cdn/domain/{domainName}/logs
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const domainName = this.getNodeParameter('domainName', 0) as string;
	const date = this.getNodeParameter('date', 0) as string;
	const data = (await client.httpGet(`/hosting/web/${serviceName}/cdn/domain/${domainName}/logs`, { qs: { date } })) as IDataObject;
	return [{ json: data }];
}
