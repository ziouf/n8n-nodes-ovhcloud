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
			displayName: 'Organization Name',
			name: 'organizationName',
			type: 'string',
			default: '',
			required: true,
			description: 'The organization name',
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

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const organizationName = this.getNodeParameter('organizationName', 0) as string;
	const body = this.getNodeParameter('body', 0) as IDataObject;

	const data = (await client.httpPost(
		`/order/freefax/${organizationName}`,
		body,
	)) as INodeExecutionData;
	return this.helpers.returnJsonArray([data]);
}
