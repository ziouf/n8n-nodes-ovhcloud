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
		description: 'The IP address to set the reverse DNS on',
		displayOptions,
	},
	{
		displayName: 'Reverse',
		name: 'reverse',
		type: 'string',
		default: '',
		required: true,
		description: 'The reverse DNS value',
		displayOptions,
	},
	];
}

/**
 * Executes the Post Add Reverse DNS operation.
 *
 * HTTP method: POST
 * Endpoint: /ip/{ip}/reverse
 */

export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const ip = this.getNodeParameter('ip', _itemIndex) as string;

	const ipReverse = (this.getNodeParameter('ipReverse', _itemIndex) as string) || '';
	const reverse = (this.getNodeParameter('reverse', _itemIndex) as string) || '';

	const body: IDataObject = {};
	body.ipReverse = ipReverse;
	body.reverse = reverse;

	const client = new ApiClient(this);
	const data = (await client.httpPost(`/ip/${encodeURIComponent(ip)}/reverse`, body)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
