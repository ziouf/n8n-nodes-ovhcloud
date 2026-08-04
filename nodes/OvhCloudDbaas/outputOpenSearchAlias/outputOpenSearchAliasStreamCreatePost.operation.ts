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
			displayName: 'Body',
			name: 'body',
			type: 'json',
			default: '',
			description: 'Request body (dbaas.logs.OutputOpenSearchAliasStreamCreation)',
			displayOptions,
		},
	];
}

/**
 * Executes the POST outputOpenSearchAliasStreamCreatePost operation.
 *
 * HTTP method: POST
 * Endpoint: /dbaas/logs/{serviceName}/output/opensearch/alias/{aliasId}/stream
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const aliasId = this.getNodeParameter('aliasId', itemIndex) as string;
	const bodyJson = (this.getNodeParameter('body', itemIndex, '') as string) || '';
	const body: IDataObject = {};
	if (bodyJson) {
		Object.assign(body, JSON.parse(bodyJson));
	}
	const client = new ApiClient(this);
	const data = (await client.httpPost(`/dbaas/logs/${encodeURIComponent(serviceName)}/output/opensearch/alias/${encodeURIComponent(aliasId)}/stream`, body)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
