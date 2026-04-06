import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * @brief Update CDN Cache Rule operation
 *
 * Updates properties of a cache rule for a domain on a CDN Dedicated service.
 *
 * HTTP method: PUT
 * Endpoint: /cdn/dedicated/{serviceName}/domains/{domain}/cacheRules/{cacheRuleId}
 */
export function descriptionCacheRulesUpdate(displayOptions: IDisplayOptions): INodeProperties[] {
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
			displayName: 'Cache Rule ID',
			name: 'cacheRuleId',
			description: 'The ID of the cache rule to update',
			type: 'string',
			required: true,
			default: '',
			displayOptions,
		},
		{
			displayName: 'Status',
			name: 'status',
			description: 'The cache rule status',
			type: 'options',
			options: [
				{ name: 'Creating', value: 'creating' },
				{ name: 'Deleting', value: 'deleting' },
				{ name: 'Error', value: 'error' },
				{ name: 'Off', value: 'off' },
				{ name: 'On', value: 'on' },
				{ name: 'Updating', value: 'updating' },
			],
			default: 'on',
			displayOptions,
		},
		{
			displayName: 'TTL',
			name: 'ttl',
			description: 'Time to live in seconds',
			type: 'number',
			default: 3600,
			displayOptions,
		},
	];
}

/**
 * Executes the Update CDN Cache Rule operation.
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing the updated cache rule details
 */
export async function executeCacheRulesUpdate(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, { extractValue: true }) as string;
	const domain = this.getNodeParameter('domain', 0) as string;
	const cacheRuleId = this.getNodeParameter('cacheRuleId', 0) as string;
	const status = this.getNodeParameter('status', 0) as string;
	const ttl = this.getNodeParameter('ttl', 0) as number;

	const response = (await client.httpPut(
		`/cdn/dedicated/${serviceName}/domains/${domain}/cacheRules/${cacheRuleId}`,
		{ status, ttl },
	)) as IDataObject;

	return this.helpers.returnJsonArray(response);
}
