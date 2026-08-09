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
			description: 'Get SPLA certificate',
			displayOptions,
		},
		{
			displayName: 'Spla ID',
			name: 'splaId',
			type: 'string',
			default: '',
			required: true,
			description: 'Get SPLA certificate',
			displayOptions,
		},
	];
}

/**
 * Get SPLA certificate
 *
 * HTTP method: GET
 * Endpoint: /dedicated/server/{serviceName}/spla/{splaId}
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const splaId = this.getNodeParameter('splaId', _itemIndex) as string;

	const data = (await client.httpGet(
		`/dedicated/server/${encodeURIComponent(String(serviceName))}/spla/${encodeURIComponent(String(splaId))}`,
	)) as IDataObject;
	const inputData = this.getInputData()[_itemIndex];
	return this.helpers.returnJsonArray([{ ...inputData.json, ...data }]);
}
