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
				description: 'Ungroup OLA interfaces',
				placeholder: 'server-12345',
			}),
			displayOptions,
		},
		{
			displayName: 'Interfaces',
			name: 'interfaces',
			type: 'string',
			default: '',
			required: true,
			description: 'Ungroup OLA interfaces',
			displayOptions,
		},
	];
}

/**
 * Ungroup OLA interfaces
 *
 * HTTP method: POST
 * Endpoint: /dedicated/server/{serviceName}/ola/ungroup
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const interfaces = this.getNodeParameter('interfaces', _itemIndex, '') as string;

	const body: IDataObject = {};
		if (interfaces) {
			body.interfaces = interfaces;
		}

	const data = (await client.httpPost(
		`/dedicated/server/${encodeURIComponent(String(serviceName))}/ola/ungroup`,
		body
	)) as IDataObject;
	const inputData = this.getInputData()[_itemIndex];
	return this.helpers.returnJsonArray([{ ...inputData.json, ...data }]);
}
