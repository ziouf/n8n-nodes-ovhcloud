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
		displayName: 'Ip',
		name: 'ip',
		type: 'string',
		default: '',
		required: true,
		description: 'The IP block identifier (e.g. 1.2.3.4/32)',
		displayOptions,
	},
	{
		displayName: 'Ip On Mitigation',
		name: 'ipOnMitigation',
		type: 'string',
		default: '',
		required: true,
		description: 'The IP address under mitigation',
		displayOptions,
	},
	];
}

/**
 * Executes the Get Mitigation IP operation.
 *
 * HTTP method: GET
 * Endpoint: /ip/{ip}/mitigation/{ipOnMitigation}
 */

export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const ip = this.getNodeParameter('ip', _itemIndex) as string;

	const ipOnMitigation = this.getNodeParameter('ipOnMitigation', _itemIndex) as string;

	const client = getClient(this);
	const data = (await client.httpGet(`/ip/${encodeURIComponent(ip)}/mitigation/${encodeURIComponent(ipOnMitigation)}`)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
