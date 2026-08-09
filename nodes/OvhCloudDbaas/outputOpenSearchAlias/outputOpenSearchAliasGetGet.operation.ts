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
	];
}

/**
 * Executes the GET outputOpenSearchAliasGetGet operation.
 *
 * HTTP method: GET
 * Endpoint: /dbaas/logs/{serviceName}/output/opensearch/alias/{aliasId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const aliasId = this.getNodeParameter('aliasId', _itemIndex) as string;
	const client = new ApiClient(this);
	const data = (await client.httpGet(`/dbaas/logs/${encodeURIComponent(serviceName)}/output/opensearch/alias/${encodeURIComponent(aliasId)}`)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
