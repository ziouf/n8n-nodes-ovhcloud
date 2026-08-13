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
			displayName: 'Iam Tags',
			name: 'iamTags',
			type: 'json',
			default: '',
			description: 'Filter resources on IAM tags',
			displayOptions,
		},
	];
}

/**
 * Executes the GET serviceListGet operation.
 *
 * HTTP method: GET
 * Endpoint: /dbaas/logs
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const qs: IDataObject = {};
	const iamTags = (this.getNodeParameter('iamTags', _itemIndex, '') as string) || '';
	if (iamTags) {
		qs.iamTags = JSON.parse(iamTags);
	}
	const client = getClient(this);
	const data = (await client.httpGet(`/dbaas/logs`, qs)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
