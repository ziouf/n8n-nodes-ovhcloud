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
			description: 'Get boot configuration',
			displayOptions,
		},
		{
			displayName: 'Boot ID',
			name: 'bootId',
			type: 'string',
			default: '',
			required: true,
			description: 'Get boot configuration',
			displayOptions,
		},
	];
}

/**
 * Get boot configuration
 *
 * HTTP method: GET
 * Endpoint: /dedicated/server/{serviceName}/boot/{bootId}
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const bootId = this.getNodeParameter('bootId', _itemIndex) as string;

	const data = (await client.httpGet(
		`/dedicated/server/${encodeURIComponent(String(serviceName))}/boot/${encodeURIComponent(String(bootId))}`,
	)) as IDataObject;
	const inputData = this.getInputData()[_itemIndex];
	return this.helpers.returnJsonArray([{ ...inputData.json, ...data }]);
}
