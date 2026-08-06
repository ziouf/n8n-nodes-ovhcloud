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
			displayName: 'License Family',
			name: 'family',
			type: 'options',
			options: [
				{ name: 'cPanel', value: 'cPanel' },
				{ name: 'Office', value: 'office' },
				{ name: 'Plesk', value: 'plesk' },
				{ name: 'Sqlserver', value: 'sqlserver' },
				{ name: 'Windows', value: 'windows' },
			],
			default: 'cPanel',
			required: true,
			displayOptions,
		},
		{
			displayName: 'Duration',
			name: 'duration',
			type: 'string',
			default: '',
			required: true,
			description: 'The duration (e.g. P1M, P1Y)',
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
	const family = this.getNodeParameter('family', itemIndex) as string;
	const duration = this.getNodeParameter('duration', itemIndex) as string;
	const body = this.getNodeParameter('body', itemIndex) as IDataObject;

	const data = (await client.httpPost(
		`/order/license/${family}/new/${duration}`,
		body,
	)) as INodeExecutionData;
	return this.helpers.returnJsonArray([data]);
}
