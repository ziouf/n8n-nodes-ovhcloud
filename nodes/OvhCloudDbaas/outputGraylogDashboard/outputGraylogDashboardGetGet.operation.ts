import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The serviceName identifier',
			displayOptions,
		},
		{
			displayName: 'Dashboard ID',
			name: 'dashboardId',
			type: 'string',
			default: '',
			required: true,
			description: 'The dashboardId identifier',
			displayOptions,
		},
	];
}

/**
 * Executes the GET outputGraylogDashboardGetGet operation.
 *
 * HTTP method: GET
 * Endpoint: /dbaas/logs/{serviceName}/output/graylog/dashboard/{dashboardId}
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const dashboardId = this.getNodeParameter('dashboardId', itemIndex) as string;
	const client = new ApiClient(this);
	const data = (await client.httpGet(`/dbaas/logs/${encodeURIComponent(serviceName)}/output/graylog/dashboard/${encodeURIComponent(dashboardId)}`)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
