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
				description: 'Update VNI',
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
	const client = getClient(this);
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
