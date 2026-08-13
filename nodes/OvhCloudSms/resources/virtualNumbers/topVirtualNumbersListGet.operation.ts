import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../../shared/transport/ApiClient';

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
 * Executes the Get /sms/virtualNumbers operation.
 *
 * HTTP method: GET
 * Endpoint: /sms/virtualNumbers
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const iamTags = this.getNodeParameter('iamTags', _itemIndex ?? 0) as string;
	const qs: IDataObject = {};
	if (iamTags) qs['iamTags'] = iamTags;
	const data = (await getClient(this).httpGet(`/sms/virtualNumbers`, qs)) as string[];
	return this.helpers.returnJsonArray(data.map((v: string) => ({ id: v })));
}
