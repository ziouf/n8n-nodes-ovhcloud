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
				description: 'Enable VNI',
				placeholder: 'server-12345',
			}),
			displayOptions,
		},
		{
			displayName: 'Vni ID',
			name: 'vniId',
			type: 'string',
			default: '',
			required: true,
			description: 'Enable VNI',
			displayOptions,
		},
	];
}

/**
 * Enable VNI
 *
 * HTTP method: POST
 * Endpoint: /dedicated/server/{serviceName}/virtualNetworkInterface/{vniId}/enable
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const vniId = this.getNodeParameter('vniId', _itemIndex) as string;

	const data = (await client.httpDelete(
		`/dedicated/server/${encodeURIComponent(String(serviceName))}/virtualNetworkInterface/${encodeURIComponent(String(vniId))}/enable`,
	)) as IDataObject;
	const inputData = this.getInputData()[_itemIndex];
	return this.helpers.returnJsonArray([{ ...inputData.json, ...data }]);
}
