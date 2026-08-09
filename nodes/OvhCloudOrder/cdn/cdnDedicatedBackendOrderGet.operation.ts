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
			displayOptions,
		},
		{
			displayName: 'Backend',
			name: 'backend',
			type: 'number',
			default: '',
			required: true,
			description: 'Backend number that will be ordered',
			displayOptions,
		},
	];
}

export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const duration = this.getNodeParameter('duration', _itemIndex) as string;
	const backend = this.getNodeParameter('backend', _itemIndex) as number;

	const qs = {backend: backend};

	const data = (await client.httpGet(`/order/cdn/dedicated/${serviceName}/backend/${duration}`, qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
