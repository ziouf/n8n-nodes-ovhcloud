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
			displayName: 'Organization Name',
			name: 'organizationName',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
		{
			displayName: 'Account ID',
			name: 'accountId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
		{
			displayName: 'Body',
			name: 'body',
			type: 'json',
			typeOptions: { editorUi: { theme: 'light' } },
			default: '{}',
			description: 'Upgrade body',
			displayOptions,
		},
	];
}

export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const organizationName = this.getNodeParameter('organizationName', itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const accountId = this.getNodeParameter('accountId', itemIndex) as string;
	const body = this.getNodeParameter('body', itemIndex) as IDataObject;

	const data = (await client.httpPost(
		`/order/email/exchange/${organizationName}/${serviceName}/upgrade/${accountId}`,
		body,
	)) as INodeExecutionData;
	return this.helpers.returnJsonArray([data]);
}
