import type {
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';

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
	];
}

export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const product = this.getNodeParameter('product', _itemIndex) as string;
	const data = (await client.httpGet(`/order/sms/${product}`)) as INodeExecutionData;
	return this.helpers.returnJsonArray([data]);
}
