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
			displayName: 'Cache Rule',
			name: 'cacheRule',
			type: 'options',
			default: '',
			required: true,
			description: 'Cache rule upgrade option to 100 or 1000',
			displayOptions,
		},
	];
}

export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const cacheRule = this.getNodeParameter('cacheRule', _itemIndex) as string;

	const qs = {cacheRule: cacheRule};

	const data = (await client.httpGet(`/order/cdn/dedicated/${serviceName}/cacheRule`, qs)) as IDataObject[];
	return this.helpers.returnJsonArray(data);
}
