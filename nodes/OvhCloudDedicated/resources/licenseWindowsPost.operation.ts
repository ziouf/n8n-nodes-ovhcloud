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
				description: 'Add Windows license',
				placeholder: 'server-12345',
			}),
			displayOptions,
		},
		{
			displayName: 'License ID',
			name: 'licenseId',
			type: 'string',
			default: '',
			required: true,
			description: 'Add Windows license',
			displayOptions,
		},
	];
}

/**
 * Add Windows license
 *
 * HTTP method: POST
 * Endpoint: /dedicated/server/{serviceName}/license/windows
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const licenseId = this.getNodeParameter('licenseId', _itemIndex, '') as string;

	const body: IDataObject = {};
		if (licenseId) {
			body.licenseId = licenseId;
		}

	const data = (await client.httpPost(
		`/dedicated/server/${encodeURIComponent(String(serviceName))}/license/windows`,
		body
	)) as IDataObject;
	const inputData = this.getInputData()[_itemIndex];
	return this.helpers.returnJsonArray([{ ...inputData.json, ...data }]);
}
