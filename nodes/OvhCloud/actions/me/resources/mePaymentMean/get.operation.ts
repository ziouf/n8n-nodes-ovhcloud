import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
	IDataObject,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Payment Mean ID',
			name: 'paymentMeanId',
			type: 'string',
			default: '',
			required: true,
			description: 'The ID of the payment mean',
			displayOptions,
		},
	];
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const paymentMeanId = this.getNodeParameter('paymentMeanId', 0) as string;
	const data = (await client.httpGet(`/me/paymentMean/${paymentMeanId}`)) as IDataObject;
	return [{ json: data }];
}
