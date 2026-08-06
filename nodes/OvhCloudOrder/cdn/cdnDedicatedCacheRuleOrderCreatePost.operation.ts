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
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The internal name of your CDN offer',
			displayOptions,
		},
		{
			displayName: 'Duration',
			name: 'duration',
			type: 'string',
			default: '',
			required: true,
			description: 'Duration',
			displayOptions,
		},
		{
			displayName: 'Cache Rule',
			name: 'cacheRule',
			type: 'options',
			default: '',
			required: true,
			description: 'cache rule upgrade option to 100 or 1000',
			displayOptions,
		},
	];
}

export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const duration = this.getNodeParameter('duration', itemIndex) as string;
	const cacheRule = this.getNodeParameter('cacheRule', itemIndex) as string;

	const body = {cacheRule: cacheRule};

	const data = (await client.httpPost(`/order/cdn/dedicated/${serviceName}/cacheRule/${duration}`, body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
