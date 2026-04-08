import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Get a specific OpenSearch alias for a DBaaS log service.
 *
 * HTTP method: GET
 * Endpoint: /dbaas/logs/{serviceName}/output/opensearch/alias/{aliasId}
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
	];
}

/**
 * Executes the Get OpenSearch Alias operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const aliasId = this.getNodeParameter('aliasId', 0) as string;
	const data = (await client.httpGet(
		`/dbaas/logs/${serviceName}/output/opensearch/alias/${aliasId}`,
	)) as IDataObject;
	return [{ json: data }];
}
