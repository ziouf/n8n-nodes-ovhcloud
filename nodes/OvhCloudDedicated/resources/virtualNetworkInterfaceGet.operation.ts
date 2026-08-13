import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Vni ID',
			name: 'vniId',
			type: 'string',
			default: '',
			required: true,
			description: 'Get virtual network interface',
			displayOptions,
		},
	];
}

/**
 * Get virtual network interface
 *
 * HTTP method: GET
 * Endpoint: /dedicated/server/virtualNetworkInterface/{vniId}
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const vniId = this.getNodeParameter('vniId', _itemIndex) as string;

	const data = (await client.httpGet(
		`/dedicated/server/virtualNetworkInterface/${encodeURIComponent(String(vniId))}`,
	)) as IDataObject;
	const inputData = this.getInputData()[_itemIndex];
	return this.helpers.returnJsonArray([{ ...inputData.json, ...data }]);
}
