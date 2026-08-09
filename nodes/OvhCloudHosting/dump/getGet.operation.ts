import type {
	IExecuteFunctions,
	IDataObject,
	INodeExecutionData,
	IDisplayOptions,
	INodeProperties,
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
			description: 'The internal name of your hosting',
			displayOptions,
		},
		{
			displayName: 'Dump ID',
			name: 'dumpId',
			type: 'number',
			default: 0,
			required: true,
			displayOptions,
		},
	];
}

/**
 * Get a dump properties
 *
 * HTTP method: GET
 * Endpoint: /hosting/web/{serviceName}/dump/{id}
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex?: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex as number) as string;
	const dumpId = this.getNodeParameter('dumpId', _itemIndex as number) as number;
	const data = (await client.httpGet(
		`/hosting/web/${encodeURIComponent(serviceName)}/dump/${encodeURIComponent(String(dumpId))}`,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
