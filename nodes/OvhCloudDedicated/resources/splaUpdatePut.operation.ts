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
			description: 'Update SPLA certificate',
			displayOptions,
		},
		{
			displayName: 'Spla ID',
			name: 'splaId',
			type: 'string',
			default: '',
			required: true,
			description: 'Update SPLA certificate',
			displayOptions,
		},
		{
			displayName: 'Serial Number',
			name: 'serialNumber',
			type: 'string',
			default: '',
			required: true,
			description: 'Update SPLA certificate',
			displayOptions,
		},
	];
}

/**
 * Update SPLA certificate
 *
 * HTTP method: PUT
 * Endpoint: /dedicated/server/{serviceName}/spla/{splaId}
 */
export async function execute(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const splaId = this.getNodeParameter('splaId', itemIndex) as string;
	const serialNumber = this.getNodeParameter('serialNumber', itemIndex, '') as string;

	const body: IDataObject = {};
		if (serialNumber) {
			body.serialNumber = serialNumber;
		}

	const data = (await client.httpPut(
		`/dedicated/server/${encodeURIComponent(String(serviceName))}/spla/${encodeURIComponent(String(splaId))}`,
		body
	)) as IDataObject;
	const inputData = this.getInputData()[itemIndex];
	return this.helpers.returnJsonArray([{ ...inputData.json, ...data }]);
}
