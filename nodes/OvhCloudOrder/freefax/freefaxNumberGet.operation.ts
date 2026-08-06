import type {
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Organization Name',
			name: 'organizationName',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
		{
			displayName: 'Number',
			name: 'number',
			type: 'string',
			default: '',
			required: true,
			description: 'The fax number',
			displayOptions,
		},
	];
}

export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const organizationName = this.getNodeParameter('organizationName', itemIndex) as string;
	const number = this.getNodeParameter('number', itemIndex) as string;
	const data = (await client.httpGet(
		`/order/freefax/${organizationName}/${number}`,
	)) as INodeExecutionData;
	return this.helpers.returnJsonArray([data]);
}
