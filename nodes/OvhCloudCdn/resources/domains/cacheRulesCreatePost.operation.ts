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
			displayName: 'Cache Type',
			name: 'cacheType',
			type: 'options',
			default: 'forceCache',
			options: [
				{ name: 'Force Cache', value: 'forceCache' },
				{ name: 'No Cache', value: 'noCache' },
			],
			required: true,
			description: 'Type of cache rule to add to the domain',
			displayOptions,
		},
		{
			displayName: 'File Match',
			name: 'fileMatch',
			type: 'string',
			default: '',
			required: true,
			description: 'File match for cache rule to add to the domain',
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
			required: true,
			description: 'File type for cache rule to add to the domain',
			displayOptions,
		},
		{
			displayName: 'Ttl',
			name: 'ttl',
			type: 'number',
			default: 0,
			required: true,
			description: 'TTL for cache rule to add to the domain',
			displayOptions,
		},
	];
}

/**
 * Executes the Post AddCacheRule operation.
 *
 * HTTP method: POST
 * Endpoint: /cdn/dedicated/{serviceName}/domains/{domain}/cacheRules
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const domain = this.getNodeParameter('domain', itemIndex) as string;
	const cacheType = this.getNodeParameter('cacheType', itemIndex) as string;
	const fileMatch = this.getNodeParameter('fileMatch', itemIndex) as string;
	const fileType = this.getNodeParameter('fileType', itemIndex) as string;
	const ttl = this.getNodeParameter('ttl', itemIndex) as number;

	const body: IDataObject = {};
	body.cacheType = cacheType;
	body.fileMatch = fileMatch;
	body.fileType = fileType;
	body.ttl = ttl;

	const client = new ApiClient(this);
	const data = (await client.httpPost(`/cdn/dedicated/${encodeURIComponent(serviceName)}/domains/${encodeURIComponent(domain)}/cacheRules`, body)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
