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
			displayName: 'Alert ID',
			name: 'alertId',
			type: 'string',
			default: '',
			required: true,
			description: 'The alertId identifier',
			displayOptions,
		},
		{
			displayName: 'Stream ID',
			name: 'streamId',
			type: 'string',
			default: '',
			required: true,
			description: 'The streamId identifier',
			displayOptions,
		},
	];
}

/**
 * Executes the GET outputGraylogStreamAlertGetGet operation.
 *
 * HTTP method: GET
 * Endpoint: /dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/alert/{alertId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const alertId = this.getNodeParameter('alertId', _itemIndex) as string;
	const streamId = this.getNodeParameter('streamId', _itemIndex) as string;
	const client = new ApiClient(this);
	const data = (await client.httpGet(`/dbaas/logs/${encodeURIComponent(serviceName)}/output/graylog/stream/${encodeURIComponent(streamId)}/alert/${encodeURIComponent(alertId)}`)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
