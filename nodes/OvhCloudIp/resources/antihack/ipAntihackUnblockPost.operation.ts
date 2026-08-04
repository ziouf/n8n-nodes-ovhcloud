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
		displayName: 'Ip Blocked',
		name: 'ipBlocked',
		type: 'string',
		default: '',
		required: true,
		description: 'Your IP',
		displayOptions,
	},
	];
}

/**
 * Executes the Post Unblock Anti-Hack IP operation.
 *
 * HTTP method: POST
 * Endpoint: /ip/{ip}/antihack/{ipBlocked}/unblock
 */

export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const ip = this.getNodeParameter('ip', itemIndex) as string;

	const ipBlocked = this.getNodeParameter('ipBlocked', itemIndex) as string;

	const body: IDataObject = {};

	const client = new ApiClient(this);
	const data = (await client.httpPost(`/ip/${encodeURIComponent(ip)}/antihack/${encodeURIComponent(ipBlocked)}/unblock`, body)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
