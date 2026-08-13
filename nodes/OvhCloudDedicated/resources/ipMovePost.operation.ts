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
				description: 'Move IP address',
				placeholder: 'server-12345',
			}),
			displayOptions,
		},
		{
			displayName: 'Ip',
			name: 'ip',
			type: 'string',
			default: '',
			required: true,
			description: 'Move IP address',
			displayOptions,
		},
		{
			displayName: 'Into Server',
			name: 'intoServer',
			type: 'string',
			default: '',
			required: true,
			description: 'Move IP address',
			displayOptions,
		},
	];
}

/**
 * Move IP address
 *
 * HTTP method: POST
 * Endpoint: /dedicated/server/{serviceName}/ipMove
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const ip = this.getNodeParameter('ip', _itemIndex, '') as string;
	const intoServer = this.getNodeParameter('intoServer', _itemIndex, '') as string;

	const body: IDataObject = {};
		if (ip) {
			body.ip = ip;
		}
		if (intoServer) {
			body.intoServer = intoServer;
		}

	const data = (await client.httpPost(
		`/dedicated/server/${encodeURIComponent(String(serviceName))}/ipMove`,
		body
	)) as IDataObject;
	const inputData = this.getInputData()[_itemIndex];
	return this.helpers.returnJsonArray([{ ...inputData.json, ...data }]);
}
