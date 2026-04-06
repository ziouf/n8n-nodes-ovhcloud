import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Get a specific Graylog dashboard for a DBaaS log service.
 *
 * HTTP method: GET
 * Endpoint: /dbaas/logs/{serviceName}/output/graylog/dashboard/{dashboardId}
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the DBaaS log service',
			displayOptions,
		},
		{
			displayName: 'Dashboard ID',
			name: 'dashboardId',
			type: 'string',
			default: '',
			required: true,
			description: 'The ID of the dashboard',
			displayOptions,
		},
	];
}

/**
 * Executes the Get Graylog Dashboard operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const dashboardId = this.getNodeParameter('dashboardId', 0) as string;
	const data = (await client.httpGet(
		`/dbaas/logs/${serviceName}/output/graylog/dashboard/${dashboardId}`,
	)) as IDataObject;
	return [{ json: data }];
}
