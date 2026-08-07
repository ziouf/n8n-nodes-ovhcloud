import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'Move IP address',
			displayOptions,
		},
		{
			displayName: 'Ip',
			name: 'ip',
			type: 'string',
			default: '',
			required: true,
			description: 'Move IP address',
			displayOptions,
		},
		{
			displayName: 'Into Server',
			name: 'intoServer',
			type: 'string',
			default: '',
			required: true,
			description: 'Move IP address',
			displayOptions,
		},
	];
}

/**
 * Move IP address
 *
 * HTTP method: POST
 * Endpoint: /dedicated/server/{serviceName}/ipMove
 */
export async function execute(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const ip = this.getNodeParameter('ip', itemIndex, '') as string;
	const intoServer = this.getNodeParameter('intoServer', itemIndex, '') as string;

	const body: IDataObject = {};
		if (ip) {
			body.ip = ip;
		}
		if (intoServer) {
			body.intoServer = intoServer;
		}

	const data = (await client.httpPost(
		`/dedicated/server/${encodeURIComponent(String(serviceName))}/ipMove`,
		body
	)) as IDataObject;
	const inputData = this.getInputData()[itemIndex];
	return this.helpers.returnJsonArray([{ ...inputData.json, ...data }]);
}
