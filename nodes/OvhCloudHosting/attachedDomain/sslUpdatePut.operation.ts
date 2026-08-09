import type {
	IExecuteFunctions,
	IDataObject,
	INodeExecutionData,
	IDisplayOptions,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

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
 * Update the SSL certificate of an attached domain
 *
 * HTTP method: PUT
 * Endpoint: /hosting/web/{serviceName}/attachedDomain/{domain}/ssl
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex?: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex as number) as string;
	const domainName = this.getNodeParameter('domainName', _itemIndex as number) as string;
	const data = (await client.httpPut(
		`/hosting/web/${encodeURIComponent(serviceName)}/attachedDomain/${encodeURIComponent(domainName)}/ssl`,
		{} as IDataObject,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
