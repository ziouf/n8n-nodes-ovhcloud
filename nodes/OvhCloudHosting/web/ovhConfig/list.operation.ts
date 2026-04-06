import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * @brief Configuration used on your hosting operation for Web Hosting
 *
 * HTTP GET request to `/hosting/web/{serviceName}/ovhConfig` endpoint.
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the operation
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [		{
			displayName: 'Historical',
			name: 'historical',
			type: 'string',
			default: '',
			description: 'Filter the value of historical property (=)',
			displayOptions,
		},
		{
			displayName: 'Path',
			name: 'path',
			type: 'string',
			default: '',
			description: 'Filter the value of path property (like)',
			displayOptions,
		},
	];
}

/**
 * Executes the Configuration used on your hosting operation.
 *
 * HTTP method: GET
 * Endpoint: /hosting/web/{serviceName}/ovhConfig
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const historical = this.getNodeParameter('historical', 0) as string;
	const path = this.getNodeParameter('path', 0) as string;
	const data = (await client.httpGet(`/hosting/web/${serviceName}/ovhConfig`, { qs: { historical, path } })) as IDataObject;
	return this.helpers.returnJsonArray(data as unknown as IDataObject[]);
}
