import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Attach an index to an OpenSearch alias.
 *
 * HTTP method: POST
 * Endpoint: /dbaas/logs/{serviceName}/output/opensearch/alias/{aliasId}/index
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
			displayName: 'Index ID',
			name: 'indexId',
			type: 'string',
			default: '',
			required: true,
			description: 'The ID of the index to attach',
			displayOptions,
		},
	];
}

/**
 * Executes the Attach OpenSearch Alias Index operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const aliasId = this.getNodeParameter('aliasId', 0) as string;
	const body: IDataObject = { indexId: this.getNodeParameter('indexId', 0) as string };
	const data = (await client.httpPost(
		`/dbaas/logs/${serviceName}/output/opensearch/alias/${aliasId}/index`,
		{ body },
	)) as IDataObject;
	return [{ json: data }];
}
