import type {
	IDataObject,
	IExecuteFunctions,
	INodeExecutionData,
	IDisplayOptions,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../shared/transport/ApiClient';
import { serviceNameLocator } from '../../shared/nodes/locators';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			...serviceNameLocator({
				searchListMethod: 'getVpsServices',
				displayName: 'VPS Service Name',
				description: 'The VPS service name (e.g. vps1234567.ovh.net)',
				placeholder: 'vps1234567.ovh.net',
			}),
			displayOptions,
		},
		{
			displayName: 'Domain',
			name: 'domain',
			type: 'string',
			default: '',
			required: true,
			description: 'The Domain parameter',
			displayOptions,
		},
	];
}

/**
 * Get DNS server for a secondary DNS domain
 *
 * HTTP method: GET
 * Endpoint: /vps/{serviceName}/secondaryDnsDomains/{domain}/dnsServer
 */
export async function execute(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const domain = this.getNodeParameter('domain', itemIndex ?? 0) as string;

	const data = (await client.httpGet(
		`/vps/${serviceName}/secondaryDnsDomains/${domain}/dnsServer`,
	)) as IDataObject;
	return this.helpers.returnJsonArray([{ ...data }]);
}
