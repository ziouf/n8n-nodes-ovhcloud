import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Delete a Graylog dashboard for a DBaaS log service.
 *
 * HTTP method: DELETE
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
			description: 'The ID of the dashboard to delete',
			displayOptions,
		},
	];
}

/**
 * Executes the Delete Graylog Dashboard operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const dashboardId = this.getNodeParameter('dashboardId', 0) as string;
	const data = (await client.httpDelete(
		`/dbaas/logs/${serviceName}/output/graylog/dashboard/${dashboardId}`,
	)) as IDataObject;
	return [{ json: data }];
}
