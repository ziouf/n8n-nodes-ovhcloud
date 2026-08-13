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
				description: 'Revoke SPLA certificate',
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
			description: 'Revoke SPLA certificate',
			displayOptions,
		},
	];
}

/**
 * Revoke SPLA certificate
 *
 * HTTP method: POST
 * Endpoint: /dedicated/server/{serviceName}/spla/{splaId}/revoke
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const splaId = this.getNodeParameter('splaId', _itemIndex) as string;

	const data = (await client.httpDelete(
		`/dedicated/server/${encodeURIComponent(String(serviceName))}/spla/${encodeURIComponent(String(splaId))}/revoke`,
	)) as IDataObject;
	const inputData = this.getInputData()[_itemIndex];
	return this.helpers.returnJsonArray([{ ...inputData.json, ...data }]);
}
