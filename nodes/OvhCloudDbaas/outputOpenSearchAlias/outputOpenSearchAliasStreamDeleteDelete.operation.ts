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
			displayName: 'Alias ID',
			name: 'aliasId',
			type: 'string',
			default: '',
			required: true,
			description: 'The aliasId identifier',
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
 * Executes the DELETE outputOpenSearchAliasStreamDeleteDelete operation.
 *
 * HTTP method: DELETE
 * Endpoint: /dbaas/logs/{serviceName}/output/opensearch/alias/{aliasId}/stream/{streamId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const aliasId = this.getNodeParameter('aliasId', _itemIndex) as string;
	const streamId = this.getNodeParameter('streamId', _itemIndex) as string;
	const client = new ApiClient(this);
	const data = (await client.httpDelete(`/dbaas/logs/${encodeURIComponent(serviceName)}/output/opensearch/alias/${encodeURIComponent(aliasId)}/stream/${encodeURIComponent(streamId)}`)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
