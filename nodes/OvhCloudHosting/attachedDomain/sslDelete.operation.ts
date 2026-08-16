import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDisplayOptions,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The internal name of your hosting',
			displayOptions,
		},
		{
			displayName: 'Domain Name',
			name: 'domainName',
			type: 'string',
			default: '',
			required: true,
			description: 'The attached domain name',
			placeholder: 'example.com',
			displayOptions,
		},
	];
}

/**
 * Delete the SSL certificate of an attached domain
 *
 * HTTP method: DELETE
 * Endpoint: /hosting/web/{serviceName}/attachedDomain/{domain}/ssl
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex?: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0) as string;
	const domainName = this.getNodeParameter('domainName', _itemIndex ?? 0) as string;
	await client.httpDelete(
		`/hosting/web/${encodeURIComponent(serviceName)}/attachedDomain/${encodeURIComponent(domainName)}/ssl`,
	);
	return this.helpers.returnJsonArray([{ success: true }]);
}
