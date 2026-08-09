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
			description: 'Add Windows license',
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
	const client = new ApiClient(this);
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
