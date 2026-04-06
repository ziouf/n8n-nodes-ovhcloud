import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Update an alert for a Graylog stream.
 *
 * HTTP method: PUT
 * Endpoint: /dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/alert/{alertId}
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
			displayName: 'Stream ID',
			name: 'streamId',
			type: 'string',
			default: '',
			required: true,
			description: 'The ID of the stream',
			displayOptions,
		},
		{
			displayName: 'Alert ID',
			name: 'alertId',
			type: 'string',
			default: '',
			required: true,
			description: 'The ID of the alert to update',
			displayOptions,
		},
		{
			displayName: 'Raw Body (JSON)',
			name: 'rawBody',
			type: 'json',
			default: '{}',
			description: 'Alert fields to update as a JSON object',
			displayOptions,
		},
	];
}

/**
 * Executes the Update Stream Alert operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const streamId = this.getNodeParameter('streamId', 0) as string;
	const alertId = this.getNodeParameter('alertId', 0) as string;
	const rawBody = this.getNodeParameter('rawBody', 0, '{}') as string;
	const body = typeof rawBody === 'string' ? JSON.parse(rawBody) : rawBody;
	const data = (await client.httpPut(
		`/dbaas/logs/${serviceName}/output/graylog/stream/${streamId}/alert/${alertId}`,
		{ body },
	)) as IDataObject;
	return [{ json: data }];
}
