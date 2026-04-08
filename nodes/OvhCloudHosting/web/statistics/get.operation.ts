import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * @brief Get statistics about this web hosting operation for Web Hosting
 *
 * HTTP GET request to `/hosting/web/{serviceName}/statistics` endpoint.
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the operation
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [		{
			displayName: 'Period',
			name: 'period',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
		{
			displayName: 'Type',
			name: 'type',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
	];
}

/**
 * Executes the Get statistics about this web hosting operation.
 *
 * HTTP method: GET
 * Endpoint: /hosting/web/{serviceName}/statistics
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const period = this.getNodeParameter('period', 0) as string;
	const type = this.getNodeParameter('type', 0) as string;
	const data = (await client.httpGet(`/hosting/web/${serviceName}/statistics`, { qs: { period, type } })) as IDataObject;
	return this.helpers.returnJsonArray(data as unknown as IDataObject[]);
}
