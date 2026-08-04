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
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const qs: IDataObject = {};
	const iamTags = (this.getNodeParameter('iamTags', itemIndex, '') as string) || '';
	if (iamTags) {
		qs.iamTags = JSON.parse(iamTags);
	}
	const client = new ApiClient(this);
	const data = (await client.httpGet(`/dbaas/logs`, qs)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
