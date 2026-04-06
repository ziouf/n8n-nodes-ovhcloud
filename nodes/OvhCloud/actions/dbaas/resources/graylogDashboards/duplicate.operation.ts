import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Duplicate a Graylog dashboard.
 *
 * HTTP method: POST
 * Endpoint: /dbaas/logs/{serviceName}/output/graylog/dashboard/{dashboardId}/duplicate
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
			description: 'The ID of the dashboard to duplicate',
			displayOptions,
		},
		{
			displayName: 'Description',
			name: 'description',
			type: 'string',
			default: '',
			required: true,
			description: 'Description for the duplicated dashboard',
			displayOptions,
		},
		{
			displayName: 'Title',
			name: 'title',
			type: 'string',
			default: '',
			required: true,
			description: 'Title for the duplicated dashboard',
			displayOptions,
		},
	];
}

/**
 * Executes the Duplicate Graylog Dashboard operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const dashboardId = this.getNodeParameter('dashboardId', 0) as string;
	const body: IDataObject = {
		description: this.getNodeParameter('description', 0) as string,
		title: this.getNodeParameter('title', 0) as string,
	};
	const data = (await client.httpPost(
		`/dbaas/logs/${serviceName}/output/graylog/dashboard/${dashboardId}/duplicate`,
		{ body },
	)) as IDataObject;
	return [{ json: data }];
}
