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
			description: 'Get VM virtual address',
			displayOptions,
		},
		{
			displayName: 'Vm ID',
			name: 'vmId',
			type: 'string',
			default: '',
			required: true,
			description: 'Get VM virtual address',
			displayOptions,
		},
		{
			displayName: 'Address',
			name: 'address',
			type: 'string',
			default: '',
			required: true,
			description: 'Get VM virtual address',
			displayOptions,
		},
	];
}

/**
 * Get VM virtual address
 *
 * HTTP method: GET
 * Endpoint: /dedicated/server/{serviceName}/virtualMac/{vmId}/virtualAddress/{address}
 */
export async function execute(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const vmId = this.getNodeParameter('vmId', itemIndex) as string;
	const address = this.getNodeParameter('address', itemIndex) as string;

	const data = (await client.httpGet(
		`/dedicated/server/${encodeURIComponent(String(serviceName))}/virtualMac/${encodeURIComponent(String(vmId))}/virtualAddress/${encodeURIComponent(String(address))}`,
	)) as IDataObject;
	const inputData = this.getInputData()[itemIndex];
	return this.helpers.returnJsonArray([{ ...inputData.json, ...data }]);
}
