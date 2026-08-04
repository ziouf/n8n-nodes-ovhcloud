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
	];
}

/**
 * Executes the Post FlushDomain operation.
 *
 * HTTP method: POST
 * Endpoint: /cdn/dedicated/{serviceName}/domains/{domain}/flush
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const domain = this.getNodeParameter('domain', itemIndex) as string;

	const client = new ApiClient(this);
	const data = (await client.httpPost(`/cdn/dedicated/${encodeURIComponent(serviceName)}/domains/${encodeURIComponent(domain)}/flush`, undefined)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
