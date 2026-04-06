import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * @brief Get CDN Cache Rule operation
 *
 * Retrieves details of a specific cache rule for a domain on a CDN Dedicated service.
 *
 * HTTP method: GET
 * Endpoint: /cdn/dedicated/{serviceName}/domains/{domain}/cacheRules/{cacheRuleId}
 */
export function descriptionCacheRulesGet(displayOptions: IDisplayOptions): INodeProperties[] {
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
			description: 'The ID of the cache rule to retrieve',
			type: 'string',
			required: true,
			default: '',
			displayOptions,
		},
	];
}

/**
 * Executes the Get CDN Cache Rule operation.
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing cache rule details
 */
export async function executeCacheRulesGet(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, { extractValue: true }) as string;
	const domain = this.getNodeParameter('domain', 0) as string;
	const cacheRuleId = this.getNodeParameter('cacheRuleId', 0) as string;

	const response = (await client.httpGet(
		`/cdn/dedicated/${serviceName}/domains/${domain}/cacheRules/${cacheRuleId}`,
	)) as IDataObject;

	return this.helpers.returnJsonArray(response);
}
