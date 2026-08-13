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
				description: 'Update SPLA certificate',
				placeholder: 'server-12345',
			}),
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
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const splaId = this.getNodeParameter('splaId', _itemIndex) as string;
	const serialNumber = this.getNodeParameter('serialNumber', _itemIndex, '') as string;

	const body: IDataObject = {};
		if (serialNumber) {
			body.serialNumber = serialNumber;
		}

	const data = (await client.httpPut(
		`/dedicated/server/${encodeURIComponent(String(serviceName))}/spla/${encodeURIComponent(String(splaId))}`,
		body
	)) as IDataObject;
	const inputData = this.getInputData()[_itemIndex];
	return this.helpers.returnJsonArray([{ ...inputData.json, ...data }]);
}
