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
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The internal name of your CDN offer',
			displayOptions,
		},
		{
			displayName: 'Domain',
			name: 'domain',
			type: 'string',
			default: '',
			required: true,
			description: 'Domain of this object',
			displayOptions,
		},
		{
			displayName: 'Ip',
			name: 'ip',
			type: 'string',
			default: '',
			required: true,
			description: 'IP to add to backends list',
			displayOptions,
		},
	];
}

/**
 * Executes the Post AddBackend operation.
 *
 * HTTP method: POST
 * Endpoint: /cdn/dedicated/{serviceName}/domains/{domain}/backends
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const domain = this.getNodeParameter('domain', _itemIndex) as string;
	const ip = this.getNodeParameter('ip', _itemIndex) as string;

	const body: IDataObject = {};
	body.ip = ip;

	const client = new ApiClient(this);
	const data = (await client.httpPost(`/cdn/dedicated/${encodeURIComponent(serviceName)}/domains/${encodeURIComponent(domain)}/backends`, body)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
