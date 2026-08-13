import type {
	IDataObject,
	IExecuteFunctions,
	INodeExecutionData,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';


export function description() {
	return [
		{
			displayName: 'Service',
			name: 'service',
			type: 'string',
			default: '',
			required: true,
			description: 'The service identifier',
		},
		{
			displayName: 'DomainName',
			name: 'domainName',
			type: 'string',
			default: '',
			required: true,
			description: 'The domainname identifier',
		},
		{
			displayName: 'SelectorName',
			name: 'selectorName',
			type: 'string',
			default: '',
			required: true,
			description: 'The selectorname identifier',
		},
	];
}

/**
 * Delete DKIM selector on this domain
 *
 * HTTP method: DELETE
 * Endpoint: /email/pro/{service}/domain/{domainName}/dkim/{selectorName}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const service = this.getNodeParameter('service', _itemIndex ?? 0) as string;
	const domainName = this.getNodeParameter('domainName', _itemIndex ?? 0) as string;
	const selectorName = this.getNodeParameter('selectorName', _itemIndex ?? 0) as string;





	const client = getClient(this);
	const data = (await client.httpDelete('/email' + '/' + 'pro' + '/' + encodeURIComponent(service) + '/' + 'domain' + '/' + encodeURIComponent(domainName) + '/' + 'dkim' + '/' + encodeURIComponent(selectorName))) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

