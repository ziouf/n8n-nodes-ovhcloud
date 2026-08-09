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
			description: 'Update VNI',
			displayOptions,
		},
		{
			displayName: 'Vni ID',
			name: 'vniId',
			type: 'string',
			default: '',
			required: true,
			description: 'Update VNI',
			displayOptions,
		},
		{
			displayName: 'Name',
			name: 'name',
			type: 'string',
			default: '',
			required: true,
			description: 'Update VNI',
			displayOptions,
		},
	];
}

/**
 * Update VNI
 *
 * HTTP method: PUT
 * Endpoint: /dedicated/server/{serviceName}/virtualNetworkInterface/{vniId}
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const vniId = this.getNodeParameter('vniId', _itemIndex) as string;
	const name = this.getNodeParameter('name', _itemIndex, '') as string;

	const body: IDataObject = {};
		if (name) {
			body.name = name;
		}

	const data = (await client.httpPut(
		`/dedicated/server/${encodeURIComponent(String(serviceName))}/virtualNetworkInterface/${encodeURIComponent(String(vniId))}`,
		body
	)) as IDataObject;
	const inputData = this.getInputData()[_itemIndex];
	return this.helpers.returnJsonArray([{ ...inputData.json, ...data }]);
}
