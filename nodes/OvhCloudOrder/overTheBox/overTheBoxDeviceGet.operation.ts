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
			displayName: 'Device ID',
			name: 'deviceId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
	];
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const deviceId = this.getNodeParameter('deviceId', 0) as string;
	const data = (await client.httpGet(`/order/overTheBox/${deviceId}`)) as INodeExecutionData;
	return this.helpers.returnJsonArray([data]);
}
