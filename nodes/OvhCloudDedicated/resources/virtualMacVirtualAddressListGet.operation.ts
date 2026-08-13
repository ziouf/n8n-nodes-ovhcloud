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
				description: 'List VM virtual addresses',
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
			description: 'List VM virtual addresses',
			displayOptions,
		},
	];
}

/**
 * List VM virtual addresses
 *
 * HTTP method: GET
 * Endpoint: /dedicated/server/{serviceName}/virtualMac/{vmId}/virtualAddress
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const vmId = this.getNodeParameter('vmId', _itemIndex) as string;

	const data = (await client.httpGet(
		`/dedicated/server/${encodeURIComponent(String(serviceName))}/virtualMac/${encodeURIComponent(String(vmId))}/virtualAddress`,
	)) as IDataObject;
	const inputData = this.getInputData()[_itemIndex];
	return this.helpers.returnJsonArray([{ ...inputData.json, ...data }]);
}
