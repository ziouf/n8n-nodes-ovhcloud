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
			description: 'Get boot option',
			displayOptions,
		},
		{
			displayName: 'Boot ID',
			name: 'bootId',
			type: 'string',
			default: '',
			required: true,
			description: 'Get boot option',
			displayOptions,
		},
		{
			displayName: 'Option ID',
			name: 'optionId',
			type: 'string',
			default: '',
			required: true,
			description: 'Get boot option',
			displayOptions,
		},
	];
}

/**
 * Get boot option
 *
 * HTTP method: GET
 * Endpoint: /dedicated/server/{serviceName}/boot/{bootId}/option/{optionId}
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const bootId = this.getNodeParameter('bootId', _itemIndex) as string;
	const optionId = this.getNodeParameter('optionId', _itemIndex) as string;

	const data = (await client.httpGet(
		`/dedicated/server/${encodeURIComponent(String(serviceName))}/boot/${encodeURIComponent(String(bootId))}/option/${encodeURIComponent(String(optionId))}`,
	)) as IDataObject;
	const inputData = this.getInputData()[_itemIndex];
	return this.helpers.returnJsonArray([{ ...inputData.json, ...data }]);
}
