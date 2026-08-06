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
			displayName: 'Duration',
			name: 'duration',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
	];
}

export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const duration = this.getNodeParameter('duration', itemIndex) as string;


	const data = (await client.httpGet(`/order/cdn/dedicated/new/${duration}`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
