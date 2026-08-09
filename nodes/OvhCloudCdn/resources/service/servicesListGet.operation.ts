import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Iam Tags',
			name: 'iamTags',
			type: 'string',
			default: '',
			description: 'Filter resources on IAM tags',
			displayOptions,
		},
	];
}

/**
 * Executes the Get ListCdnServices operation.
 *
 * HTTP method: GET
 * Endpoint: /cdn/dedicated
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const iamTags = (this.getNodeParameter('iamTags', _itemIndex, '') as string) || '';

	const qs: IDataObject = {};
	if (iamTags) qs.iamTags = iamTags;

	const client = new ApiClient(this);
	const data = (await client.httpGet(`/cdn/dedicated`, qs)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
