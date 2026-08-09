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
	];
}

/**
 * Executes the Get IP Move Destinations operation.
 *
 * HTTP method: GET
 * Endpoint: /ip/{ip}/move
 */

export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const ip = this.getNodeParameter('ip', _itemIndex) as string;

	const client = new ApiClient(this);
	const data = (await client.httpGet(`/ip/${encodeURIComponent(ip)}/move`)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
