import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';
import { serviceNameLocator } from '../../../shared/nodes/locators';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			...serviceNameLocator({
				searchListMethod: 'getDedicatedServerServices',
				displayName: 'Service Name',
				description: 'Delete VM virtual address',
				placeholder: 'server-12345',
			}),
			displayOptions,
		},
		{
			displayName: 'Vm ID',
			name: 'vmId',
			type: 'string',
			default: '',
			required: true,
			description: 'Delete VM virtual address',
			displayOptions,
		},
		{
			displayName: 'Address',
			name: 'address',
			type: 'string',
			default: '',
			required: true,
			description: 'Delete VM virtual address',
			displayOptions,
		},
	];
}

/**
 * Delete VM virtual address
 *
 * HTTP method: DELETE
 * Endpoint: /dedicated/server/{serviceName}/virtualMac/{vmId}/virtualAddress/{address}
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const vmId = this.getNodeParameter('vmId', _itemIndex) as string;
	const address = this.getNodeParameter('address', _itemIndex) as string;

	const data = (await client.httpDelete(
		`/dedicated/server/${encodeURIComponent(String(serviceName))}/virtualMac/${encodeURIComponent(String(vmId))}/virtualAddress/${encodeURIComponent(String(address))}`,
	)) as IDataObject;
	const inputData = this.getInputData()[_itemIndex];
	return this.helpers.returnJsonArray([{ ...inputData.json, ...data }]);
}
