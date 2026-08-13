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
	];
}

/**
 * Executes the Get Virtuozzo Licenses operation.
 *
 * HTTP method: GET
 * Endpoint: /ip/{ip}/license/virtuozzo
 */

export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const ip = this.getNodeParameter('ip', _itemIndex) as string;

	const client = getClient(this);
	const data = (await client.httpGet(`/ip/${encodeURIComponent(ip)}/license/virtuozzo`)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
