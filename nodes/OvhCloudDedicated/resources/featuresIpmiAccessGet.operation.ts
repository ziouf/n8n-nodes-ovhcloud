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
				description: 'Get IPMI access info',
				placeholder: 'server-12345',
			}),
			displayOptions,
		},
		{
			displayName: 'Type',
			name: 'type',
			type: 'options',
			options: [
				{ name: 'Ipmi', value: 'ipmi' },
			],
			default: 'ipmi',
			description: 'IPMI access type',
			displayOptions,
		},
	];
}

/**
 * Get IPMI access info
 *
 * HTTP method: GET
 * Endpoint: /dedicated/server/{serviceName}/features/ipmi/access
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const type = this.getNodeParameter('type', _itemIndex) as string;

	const qs: IDataObject = {};
	if (type) {
		qs.type = type;
	}

	const data = (await client.httpGet(
		`/dedicated/server/${encodeURIComponent(String(serviceName))}/features/ipmi/access`,
		{ qs },
	)) as IDataObject;
	const inputData = this.getInputData()[_itemIndex];
	return this.helpers.returnJsonArray([{ ...inputData.json, ...data }]);
}
