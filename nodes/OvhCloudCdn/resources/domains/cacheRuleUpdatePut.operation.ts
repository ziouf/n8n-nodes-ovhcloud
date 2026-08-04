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
			displayName: 'Cache Rule ID',
			name: 'cacheRuleId',
			type: 'number',
			default: 0,
			required: true,
			description: 'ID for this cache rule',
			displayOptions,
		},
		{
			displayName: 'Cache Type',
			name: 'cacheType',
			type: 'options',
			default: 'forceCache',
			options: [
				{ name: 'Force Cache', value: 'forceCache' },
				{ name: 'No Cache', value: 'noCache' },
			],
			description: 'Type of the cache rule',
			displayOptions,
		},
		{
			displayName: 'File Match',
			name: 'fileMatch',
			type: 'string',
			default: '',
			description: 'File match for the cache rule',
			displayOptions,
		},
		{
			displayName: 'File Type',
			name: 'fileType',
			type: 'options',
			default: 'extension',
			options: [
				{ name: 'Extension', value: 'extension' },
				{ name: 'File', value: 'file' },
				{ name: 'Folder', value: 'folder' },
			],
			description: 'File type for the cache rule',
			displayOptions,
		},
		{
			displayName: 'Ttl',
			name: 'ttl',
			type: 'number',
			default: 0,
			description: 'TTL for the cache rule',
			displayOptions,
		},
	];
}

/**
 * Executes the Put UpdateCacheRule operation.
 *
 * HTTP method: PUT
 * Endpoint: /cdn/dedicated/{serviceName}/domains/{domain}/cacheRules/{cacheRuleId}
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const domain = this.getNodeParameter('domain', itemIndex) as string;
	const cacheRuleId = this.getNodeParameter('cacheRuleId', itemIndex) as number;
	const cacheType = (this.getNodeParameter('cacheType', itemIndex, "") as string);
	const fileMatch = (this.getNodeParameter('fileMatch', itemIndex, "") as string);
	const fileType = (this.getNodeParameter('fileType', itemIndex, "") as string);
	const ttl = (this.getNodeParameter('ttl', itemIndex, "") as number);

	const body: IDataObject = {};
	if (cacheType !== '') body.cacheType = cacheType;
	if (fileMatch !== '') body.fileMatch = fileMatch;
	if (fileType !== '') body.fileType = fileType;
	if (ttl !== 0) body.ttl = ttl;

	const client = new ApiClient(this);
	const data = (await client.httpPut(`/cdn/dedicated/${encodeURIComponent(serviceName)}/domains/${encodeURIComponent(domain)}/cacheRules/${encodeURIComponent(cacheRuleId)}`, body)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
