import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Attach a stream to an OpenSearch alias.
 *
 * HTTP method: POST
 * Endpoint: /dbaas/logs/{serviceName}/output/opensearch/alias/{aliasId}/stream
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
			description: 'The ID of the stream to attach',
			displayOptions,
		},
	];
}

/**
 * Executes the Attach OpenSearch Alias Stream operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const aliasId = this.getNodeParameter('aliasId', 0) as string;
	const body: IDataObject = { streamId: this.getNodeParameter('streamId', 0) as string };
	const data = (await client.httpPost(
		`/dbaas/logs/${serviceName}/output/opensearch/alias/${aliasId}/stream`,
		{ body },
	)) as IDataObject;
	return [{ json: data }];
}
