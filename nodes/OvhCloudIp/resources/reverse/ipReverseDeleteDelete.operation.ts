import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

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
		displayName: 'Ip Reverse',
		name: 'ipReverse',
		type: 'string',
		default: '',
		required: true,
		description: 'IP of the reverse entry',
		displayOptions,
	},
	];
}

/**
 * Executes the Delete Delete Reverse DNS operation.
 *
 * HTTP method: DELETE
 * Endpoint: /ip/{ip}/reverse/{ipReverse}
 */

export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const ip = this.getNodeParameter('ip', _itemIndex) as string;

	const ipReverse = this.getNodeParameter('ipReverse', _itemIndex) as string;

	const client = new ApiClient(this);
	const data = (await client.httpDelete(`/ip/${encodeURIComponent(ip)}/reverse/${encodeURIComponent(ipReverse)}`)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
