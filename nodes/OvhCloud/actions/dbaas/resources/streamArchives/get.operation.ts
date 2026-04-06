import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Get a specific archive for a Graylog stream.
 *
 * HTTP method: GET
 * Endpoint: /dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/archive/{archiveId}
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
			displayName: 'Archive ID',
			name: 'archiveId',
			type: 'string',
			default: '',
			required: true,
			description: 'The ID of the archive',
			displayOptions,
		},
	];
}

/**
 * Executes the Get Stream Archive operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const streamId = this.getNodeParameter('streamId', 0) as string;
	const archiveId = this.getNodeParameter('archiveId', 0) as string;
	const data = (await client.httpGet(
		`/dbaas/logs/${serviceName}/output/graylog/stream/${streamId}/archive/${archiveId}`,
	)) as IDataObject;
	return [{ json: data }];
}
