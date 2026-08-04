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
		displayName: 'Ip On Mitigation',
		name: 'ipOnMitigation',
		type: 'string',
		default: '',
		required: true,
		description: 'IP to add on mitigation',
		displayOptions,
	},
	];
}

/**
 * Executes the Post Add Mitigation IP operation.
 *
 * HTTP method: POST
 * Endpoint: /ip/{ip}/mitigation
 */

export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const ip = this.getNodeParameter('ip', itemIndex) as string;

	const ipOnMitigation = (this.getNodeParameter('ipOnMitigation', itemIndex) as string) || '';

	const body: IDataObject = {};
	body.ipOnMitigation = ipOnMitigation;

	const client = new ApiClient(this);
	const data = (await client.httpPost(`/ip/${encodeURIComponent(ip)}/mitigation`, body)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
