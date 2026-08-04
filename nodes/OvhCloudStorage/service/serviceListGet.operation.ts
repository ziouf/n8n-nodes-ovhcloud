import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

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
 * Executes the List available services operation.
 *
 * HTTP method: GET
 * Endpoint: /storage/netapp
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const iamTags = this.getNodeParameter('iamTags', itemIndex, '') as string;
	const qs: IDataObject = {};
	if (iamTags !== '') { qs.iamTags = iamTags; }
	const data = (await client.httpGet(`/storage/netapp`, qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
