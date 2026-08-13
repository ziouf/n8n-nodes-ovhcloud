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
				description: 'Create secondary DNS domain',
				placeholder: 'server-12345',
			}),
			displayOptions,
		},
		{
			displayName: 'Domain Name',
			name: 'domainName',
			type: 'string',
			default: '',
			required: true,
			description: 'Create secondary DNS domain',
			displayOptions,
		},
	];
}

/**
 * Create secondary DNS domain
 *
 * HTTP method: POST
 * Endpoint: /dedicated/server/{serviceName}/secondaryDnsDomains
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const domainName = this.getNodeParameter('domainName', _itemIndex, '') as string;

	const body: IDataObject = {};
		if (domainName) {
			body.domainName = domainName;
		}

	const data = (await client.httpPost(
		`/dedicated/server/${encodeURIComponent(String(serviceName))}/secondaryDnsDomains`,
		body
	)) as IDataObject;
	const inputData = this.getInputData()[_itemIndex];
	return this.helpers.returnJsonArray([{ ...inputData.json, ...data }]);
}
