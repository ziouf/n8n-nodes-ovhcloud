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
			displayName: 'Index ID',
			name: 'indexId',
			type: 'string',
			default: '',
			required: true,
			description: 'The indexId identifier',
			displayOptions,
		},
	];
}

/**
 * Executes the DELETE outputOpenSearchAliasIndexDeleteDelete operation.
 *
 * HTTP method: DELETE
 * Endpoint: /dbaas/logs/{serviceName}/output/opensearch/alias/{aliasId}/index/{indexId}
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const aliasId = this.getNodeParameter('aliasId', itemIndex) as string;
	const indexId = this.getNodeParameter('indexId', itemIndex) as string;
	const client = new ApiClient(this);
	const data = (await client.httpDelete(`/dbaas/logs/${encodeURIComponent(serviceName)}/output/opensearch/alias/${encodeURIComponent(aliasId)}/index/${encodeURIComponent(indexId)}`)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
