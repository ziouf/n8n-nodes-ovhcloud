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
		displayName: 'Slicing Size',
		name: 'slicingSize',
		type: 'string',
		default: '',
		required: true,
		description: 'Size (ip mask) of the IPs to create inside given IP',
		displayOptions,
	},
	];
}

/**
 * Executes the Post Slice BYOIP operation.
 *
 * HTTP method: POST
 * Endpoint: /ip/{ip}/bringYourOwnIp/slice
 */

export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const ip = this.getNodeParameter('ip', itemIndex) as string;

	const slicingSize = (this.getNodeParameter('slicingSize', itemIndex) as string) || '';

	const body: IDataObject = {};
	body.slicingSize = slicingSize;

	const client = new ApiClient(this);
	const data = (await client.httpPost(`/ip/${encodeURIComponent(ip)}/bringYourOwnIp/slice`, body)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
