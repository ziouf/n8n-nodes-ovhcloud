import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';

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
			displayName: 'Quota',
			name: 'quota',
			type: 'options',
			default: '',
			required: true,
			description: 'Quota number in TB that will be added to the CDN service',
			displayOptions,
		},
	];
}

export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const duration = this.getNodeParameter('duration', _itemIndex) as string;
	const quota = this.getNodeParameter('quota', _itemIndex) as string;

	const qs = {quota: quota};

	const data = (await client.httpGet(`/order/cdn/dedicated/${serviceName}/quota/${duration}`, qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
