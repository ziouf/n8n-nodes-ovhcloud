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
			displayName: 'Product',
			name: 'product',
			type: 'string',
			default: '',
			required: true,
			description: 'The SMS product',
			displayOptions,
		},
		{
			displayName: 'Body',
			name: 'body',
			type: 'json',
			typeOptions: { editorUi: { theme: 'light' } },
			default: '{}',
			description: 'Order creation body',
			displayOptions,
		},
	];
}

export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const product = this.getNodeParameter('product', itemIndex) as string;
	const body = this.getNodeParameter('body', itemIndex) as IDataObject;

	const data = (await client.httpPost(`/order/sms/${product}`, body)) as INodeExecutionData;
	return this.helpers.returnJsonArray([data]);
}
