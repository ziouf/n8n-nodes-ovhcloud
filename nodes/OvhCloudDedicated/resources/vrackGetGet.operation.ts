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
			description: 'Get vRack connection details',
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
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const vRackId = this.getNodeParameter('vRackId', _itemIndex) as string;

	const data = (await client.httpGet(
		`/dedicated/server/${encodeURIComponent(String(serviceName))}/vrack/${encodeURIComponent(String(vRackId))}`,
	)) as IDataObject;
	const inputData = this.getInputData()[_itemIndex];
	return this.helpers.returnJsonArray([{ ...inputData.json, ...data }]);
}
