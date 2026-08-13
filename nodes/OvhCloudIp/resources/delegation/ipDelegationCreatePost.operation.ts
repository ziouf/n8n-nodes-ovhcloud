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
		displayName: 'Target',
		name: 'target',
		type: 'string',
		default: '',
		required: true,
		description: 'Target for reverse delegation on IPv6',
		displayOptions,
	},
	];
}

/**
 * Executes the Post Add Reverse Delegation operation.
 *
 * HTTP method: POST
 * Endpoint: /ip/{ip}/delegation
 */

export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const ip = this.getNodeParameter('ip', _itemIndex) as string;

	const target = (this.getNodeParameter('target', _itemIndex) as string) || '';

	const body: IDataObject = {};
	body.target = target;

	const client = getClient(this);
	const data = (await client.httpPost(`/ip/${encodeURIComponent(ip)}/delegation`, body)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
