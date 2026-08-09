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
			displayName: 'File Match',
			name: 'fileMatch',
			type: 'string',
			default: '',
			description: 'Filter the value of fileMatch property (like)',
			displayOptions,
		},
	];
}

/**
 * Executes the Get ListCacheRules operation.
 *
 * HTTP method: GET
 * Endpoint: /cdn/dedicated/{serviceName}/domains/{domain}/cacheRules
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const domain = this.getNodeParameter('domain', _itemIndex) as string;
	const fileMatch = (this.getNodeParameter('fileMatch', _itemIndex, '') as string) || '';

	const qs: IDataObject = {};
	if (fileMatch) qs.fileMatch = fileMatch;

	const client = new ApiClient(this);
	const data = (await client.httpGet(`/cdn/dedicated/${encodeURIComponent(serviceName)}/domains/${encodeURIComponent(domain)}/cacheRules`, qs)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
