import { IExecuteFunctions, INodeExecutionData, IDataObject, INodeProperties, IDisplayOptions } from 'n8n-workflow';
import { ApiClient } from '../../../transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Bill ID',
			name: 'billId',
			type: 'string',
			default: '',
			required: true,
			description: 'Filter bills related to this bill ID',
			displayOptions,
		},
	];
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const billId = this.getNodeParameter('billId', 0, { extractValue: true }) as string;
	const data = (await client.httpGet(`/me/bill/${billId}`)) as IDataObject;
	return [{ json: data }];
}
