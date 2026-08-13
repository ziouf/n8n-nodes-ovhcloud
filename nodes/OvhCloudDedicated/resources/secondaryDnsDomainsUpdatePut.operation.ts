import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';
import { serviceNameLocator } from '../../../shared/nodes/locators';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			...serviceNameLocator({
				searchListMethod: 'getDedicatedServerServices',
				displayName: 'Service Name',
				description: 'Update secondary DNS domain',
				placeholder: 'server-12345',
			}),
			displayOptions,
		},
		{
			displayName: 'Domain',
			name: 'domain',
			type: 'string',
			default: '',
			required: true,
			description: 'Update secondary DNS domain',
			displayOptions,
		},
		{
			displayName: 'Ip',
			name: 'ip',
			type: 'string',
			default: '',
			required: true,
			description: 'Update secondary DNS domain',
			displayOptions,
		},
	];
}

/**
 * Update secondary DNS domain
 *
 * HTTP method: PUT
 * Endpoint: /dedicated/server/{serviceName}/secondaryDnsDomains/{domain}
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const domain = this.getNodeParameter('domain', _itemIndex) as string;
	const ip = this.getNodeParameter('ip', _itemIndex, '') as string;

	const body: IDataObject = {};
		if (ip) {
			body.ip = ip;
		}

	const data = (await client.httpPut(
		`/dedicated/server/${encodeURIComponent(String(serviceName))}/secondaryDnsDomains/${encodeURIComponent(String(domain))}`,
		body
	)) as IDataObject;
	const inputData = this.getInputData()[_itemIndex];
	return this.helpers.returnJsonArray([{ ...inputData.json, ...data }]);
}
