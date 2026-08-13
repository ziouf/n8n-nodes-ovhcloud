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
		displayName: 'Description',
		name: 'description',
		type: 'string',
		default: '',
		description: 'Custom description on your IP',
		displayOptions,
	},
	];
}

/**
 * Executes the Put Update IP operation.
 *
 * HTTP method: PUT
 * Endpoint: /ip/{ip}
 */

export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const ip = this.getNodeParameter('ip', _itemIndex) as string;

	const description = (this.getNodeParameter('description', _itemIndex) as string) || '';

	const body: IDataObject = {};
	if (description) body.description = description;

	const client = getClient(this);
	const data = (await client.httpPut(`/ip/${encodeURIComponent(ip)}`, body)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
