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
		displayName: 'Target',
		name: 'target',
		type: 'string',
		default: '',
		required: true,
		description: 'NS target for delegation',
		displayOptions,
	},
	];
}

/**
 * Executes the Get Reverse Delegation operation.
 *
 * HTTP method: GET
 * Endpoint: /ip/{ip}/delegation/{target}
 */

export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const ip = this.getNodeParameter('ip', itemIndex) as string;

	const target = this.getNodeParameter('target', itemIndex) as string;

	const client = new ApiClient(this);
	const data = (await client.httpGet(`/ip/${encodeURIComponent(ip)}/delegation/${encodeURIComponent(target)}`)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
