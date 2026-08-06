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
			displayName: 'Quota',
			name: 'quota',
			type: 'options',
			default: '',
			required: true,
			description: 'quota number in TB that will be added to the CDN service',
			displayOptions,
		},
	];
}

export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const duration = this.getNodeParameter('duration', itemIndex) as string;
	const quota = this.getNodeParameter('quota', itemIndex) as string;

	const qs = {quota: quota};

	const data = (await client.httpGet(`/order/cdn/dedicated/${serviceName}/quota/${duration}`, qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
