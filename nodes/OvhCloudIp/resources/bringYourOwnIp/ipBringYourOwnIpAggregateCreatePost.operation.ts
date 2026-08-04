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
		displayName: 'Aggregation Ip',
		name: 'aggregationIp',
		type: 'string',
		default: '',
		required: true,
		description: 'IP range to create by aggregation of all its children',
		displayOptions,
	},
	];
}

/**
 * Executes the Post Aggregate BYOIP operation.
 *
 * HTTP method: POST
 * Endpoint: /ip/{ip}/bringYourOwnIp/aggregate
 */

export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const ip = this.getNodeParameter('ip', itemIndex) as string;

	const aggregationIp = (this.getNodeParameter('aggregationIp', itemIndex) as string) || '';

	const body: IDataObject = {};
	body.aggregationIp = aggregationIp;

	const client = new ApiClient(this);
	const data = (await client.httpPost(`/ip/${encodeURIComponent(ip)}/bringYourOwnIp/aggregate`, body)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
