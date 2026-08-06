import type {
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The VPS service name',
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
	];
}

export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const duration = this.getNodeParameter('duration', itemIndex) as string;
	const data = (await client.httpGet(
		`/order/vps/${serviceName}/additionalDisk/${duration}`,
	)) as unknown[];

	if (!Array.isArray(data)) {
		return this.helpers.returnJsonArray([data]);
	}

	return this.helpers.returnJsonArray(data.map((item) => item as INodeExecutionData));
}
