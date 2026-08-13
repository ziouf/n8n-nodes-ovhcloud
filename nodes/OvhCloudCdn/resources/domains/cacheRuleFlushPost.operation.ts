import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../../shared/transport/ApiClient';

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
	];
}

/**
 * Executes the Post FlushCacheRule operation.
 *
 * HTTP method: POST
 * Endpoint: /cdn/dedicated/{serviceName}/domains/{domain}/cacheRules/{cacheRuleId}/flush
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const domain = this.getNodeParameter('domain', _itemIndex) as string;
	const cacheRuleId = this.getNodeParameter('cacheRuleId', _itemIndex) as number;

	const client = getClient(this);
	const data = (await client.httpPost(`/cdn/dedicated/${encodeURIComponent(serviceName)}/domains/${encodeURIComponent(domain)}/cacheRules/${encodeURIComponent(cacheRuleId)}/flush`, undefined)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
