import { IExecuteFunctions, INodeExecutionData, IDataObject, INodeProperties, IDisplayOptions } from 'n8n-workflow';
import { ApiClient } from '../../../transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Order ID',
			name: 'orderId',
			type: 'string',
			default: '',
			required: true,
			description: 'Filter orders related to this order ID',
			displayOptions,
		},
	];
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const orderId = this.getNodeParameter('orderId', 0, { extractValue: true }) as string;
	const data = (await client.httpGet(`/me/order/${orderId}`)) as IDataObject;
	return [{ json: data }];
}
