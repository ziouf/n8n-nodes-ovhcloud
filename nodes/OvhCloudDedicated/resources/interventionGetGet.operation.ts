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
				description: 'Get intervention details',
				placeholder: 'server-12345',
			}),
			displayOptions,
		},
		{
			displayName: 'Intervention ID',
			name: 'interventionId',
			type: 'string',
			default: '',
			required: true,
			description: 'Get intervention details',
			displayOptions,
		},
	];
}

/**
 * Get intervention details
 *
 * HTTP method: GET
 * Endpoint: /dedicated/server/{serviceName}/intervention/{interventionId}
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const interventionId = this.getNodeParameter('interventionId', _itemIndex) as string;

	const data = (await client.httpGet(
		`/dedicated/server/${encodeURIComponent(String(serviceName))}/intervention/${encodeURIComponent(String(interventionId))}`,
	)) as IDataObject;
	const inputData = this.getInputData()[_itemIndex];
	return this.helpers.returnJsonArray([{ ...inputData.json, ...data }]);
}
