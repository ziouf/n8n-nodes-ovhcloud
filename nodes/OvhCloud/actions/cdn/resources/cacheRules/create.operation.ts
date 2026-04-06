import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * @brief Create CDN Cache Rule operation
 *
 * Adds a new cache rule to a domain on a CDN Dedicated service.
 *
 * HTTP method: POST
 * Endpoint: /cdn/dedicated/{serviceName}/domains/{domain}/cacheRules
 */
export function descriptionCacheRulesCreate(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			description:
				'The name of the CDN Dedicated service. This can be set manually or selected from the list of services.',
			type: 'resourceLocator',
			required: true,
			default: {
				mode: 'str',
				value: '',
			},
			modes: [
				{
					displayName: 'By Name',
					name: 'str',
					type: 'string',
				},
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					placeholder: 'Select a CDN service...',
					typeOptions: {
						searchListMethod: 'getCdnServices',
						searchable: true,
					},
				},
			],
			displayOptions,
		},
		{
			displayName: 'Domain',
			name: 'domain',
			description: 'The domain name',
			type: 'string',
			required: true,
			default: '',
			displayOptions,
		},
		{
			displayName: 'Cache Type',
			name: 'cacheType',
			type: 'options',
			required: true,
			options: [
				{ name: 'Force Cache', value: 'forceCache' },
				{ name: 'No Cache', value: 'noCache' },
			],
			default: 'forceCache',
			displayOptions,
		},
		{
			displayName: 'File Match',
			name: 'fileMatch',
			description: 'The file match pattern',
			type: 'string',
			required: true,
			default: '',
			displayOptions,
		},
		{
			displayName: 'File Type',
			name: 'fileType',
			type: 'options',
			required: true,
			options: [
				{ name: 'Extension', value: 'extension' },
				{ name: 'File', value: 'file' },
				{ name: 'Folder', value: 'folder' },
			],
			default: 'extension',
			displayOptions,
		},
		{
			displayName: 'TTL',
			name: 'ttl',
			description: 'Time to live in seconds',
			type: 'number',
			required: true,
			default: 3600,
			displayOptions,
		},
	];
}

/**
 * Executes the Create CDN Cache Rule operation.
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing the created cache rule details
 */
export async function executeCacheRulesCreate(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, { extractValue: true }) as string;
	const domain = this.getNodeParameter('domain', 0) as string;
	const cacheType = this.getNodeParameter('cacheType', 0) as string;
	const fileMatch = this.getNodeParameter('fileMatch', 0) as string;
	const fileType = this.getNodeParameter('fileType', 0) as string;
	const ttl = this.getNodeParameter('ttl', 0) as number;

	const response = (await client.httpPost(
		`/cdn/dedicated/${serviceName}/domains/${domain}/cacheRules`,
		{ cacheType, fileMatch, fileType, ttl },
	)) as IDataObject;

	return this.helpers.returnJsonArray(response);
}
