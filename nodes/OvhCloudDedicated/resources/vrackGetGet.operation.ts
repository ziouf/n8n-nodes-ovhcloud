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
				description: 'Get vRack connection details',
				placeholder: 'server-12345',
			}),
			displayOptions,
		},
		{
			displayName: 'V Rack ID',
			name: 'vRackId',
			type: 'string',
			default: '',
			required: true,
			description: 'Get vRack connection details',
			displayOptions,
		},
	];
}

/**
 * Get vRack connection details
 *
 * HTTP method: GET
 * Endpoint: /dedicated/server/{serviceName}/vrack/{vRackId}
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const vRackId = this.getNodeParameter('vRackId', _itemIndex) as string;

	const data = (await client.httpGet(
		`/dedicated/server/${encodeURIComponent(String(serviceName))}/vrack/${encodeURIComponent(String(vRackId))}`,
	)) as IDataObject;
	const inputData = this.getInputData()[_itemIndex];
	return this.helpers.returnJsonArray([{ ...inputData.json, ...data }]);
}
