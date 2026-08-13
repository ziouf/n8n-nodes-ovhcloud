import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
		{
			displayName: 'Archive ID',
			name: 'archiveId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
		{
			displayName: 'Stream ID',
			name: 'streamId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
	];
}

/**
 * Executes the POST outputGraylogStreamArchiveUrlPost operation.
 *
 * HTTP method: POST
 * Endpoint: /dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/archive/{archiveId}/url
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const archiveId = this.getNodeParameter('archiveId', _itemIndex) as string;
	const streamId = this.getNodeParameter('streamId', _itemIndex) as string;
	const client = getClient(this);
	const data = (await client.httpPost(`/dbaas/logs/${encodeURIComponent(serviceName)}/output/graylog/stream/${encodeURIComponent(streamId)}/archive/${encodeURIComponent(archiveId)}/url`)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
