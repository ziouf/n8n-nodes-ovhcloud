import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * @brief List tasks attached to your hosting operation for Web Hosting
 *
 * HTTP GET request to `/hosting/web/{serviceName}/tasks` endpoint.
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the operation
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Function',
			name: 'function',
			type: 'string',
			default: '',
			description: 'Filter tasks by function (like)',
			displayOptions,
		},
		{
			displayName: 'Status',
			name: 'status',
			type: 'string',
			default: '',
			description: 'Filter tasks by status (like)',
			displayOptions,
		},
	];
}

/**
 * Executes the List tasks attached to your hosting operation.
 *
 * HTTP method: GET
 * Endpoint: /hosting/web/{serviceName}/tasks
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const func = this.getNodeParameter('function', 0) as string;
	const status = this.getNodeParameter('status', 0) as string;
	const data = (await client.httpGet(`/hosting/web/${serviceName}/tasks`, {
		qs: { function: func, status },
	})) as IDataObject;
	return this.helpers.returnJsonArray(data as unknown as IDataObject[]);
}
