import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Detach a stream from an OpenSearch alias.
 *
 * HTTP method: DELETE
 * Endpoint: /dbaas/logs/{serviceName}/output/opensearch/alias/{aliasId}/stream/{streamId}
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
			displayName: 'Alias ID',
			name: 'aliasId',
			type: 'string',
			default: '',
			required: true,
			description: 'The ID of the alias',
			displayOptions,
		},
		{
			displayName: 'Stream ID',
			name: 'streamId',
			type: 'string',
			default: '',
			required: true,
			description: 'The ID of the stream to detach',
			displayOptions,
		},
	];
}

/**
 * Executes the Detach OpenSearch Alias Stream operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const aliasId = this.getNodeParameter('aliasId', 0) as string;
	const streamId = this.getNodeParameter('streamId', 0) as string;
	const data = (await client.httpDelete(
		`/dbaas/logs/${serviceName}/output/opensearch/alias/${aliasId}/stream/${streamId}`,
	)) as IDataObject;
	return [{ json: data }];
}
