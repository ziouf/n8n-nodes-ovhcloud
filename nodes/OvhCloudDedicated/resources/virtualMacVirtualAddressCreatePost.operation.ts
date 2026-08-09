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
			description: 'Create VM virtual address',
			displayOptions,
		},
		{
			displayName: 'Vm ID',
			name: 'vmId',
			type: 'string',
			default: '',
			required: true,
			description: 'Create VM virtual address',
			displayOptions,
		},
		{
			displayName: 'Type',
			name: 'type',
			type: 'string',
			default: '',
			required: true,
			description: 'Create VM virtual address',
			displayOptions,
		},
	];
}

/**
 * Create VM virtual address
 *
 * HTTP method: POST
 * Endpoint: /dedicated/server/{serviceName}/virtualMac/{vmId}/virtualAddress
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const vmId = this.getNodeParameter('vmId', _itemIndex) as string;
	const type = this.getNodeParameter('type', _itemIndex, '') as string;

	const body: IDataObject = {};
		if (type) {
			body.type = type;
		}

	const data = (await client.httpPost(
		`/dedicated/server/${encodeURIComponent(String(serviceName))}/virtualMac/${encodeURIComponent(String(vmId))}/virtualAddress`,
		body
	)) as IDataObject;
	const inputData = this.getInputData()[_itemIndex];
	return this.helpers.returnJsonArray([{ ...inputData.json, ...data }]);
}
