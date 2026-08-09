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
			description: 'Create SPLA certificate',
			displayOptions,
		},
		{
			displayName: 'Serial Number',
			name: 'serialNumber',
			type: 'string',
			default: '',
			required: true,
			description: 'Create SPLA certificate',
			displayOptions,
		},
	];
}

/**
 * Create SPLA certificate
 *
 * HTTP method: POST
 * Endpoint: /dedicated/server/{serviceName}/spla
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const serialNumber = this.getNodeParameter('serialNumber', _itemIndex, '') as string;

	const body: IDataObject = {};
		if (serialNumber) {
			body.serialNumber = serialNumber;
		}

	const data = (await client.httpPost(
		`/dedicated/server/${encodeURIComponent(String(serviceName))}/spla`,
		body
	)) as IDataObject;
	const inputData = this.getInputData()[_itemIndex];
	return this.helpers.returnJsonArray([{ ...inputData.json, ...data }]);
}
