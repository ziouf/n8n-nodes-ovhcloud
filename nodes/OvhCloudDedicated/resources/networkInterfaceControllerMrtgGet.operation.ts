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
			description: 'Get NIC MRTG data',
			displayOptions,
		},
		{
			displayName: 'Nic ID',
			name: 'nicId',
			type: 'string',
			default: '',
			required: true,
			description: 'Get NIC MRTG data',
			displayOptions,
		},
	];
}

/**
 * Get NIC MRTG data
 *
 * HTTP method: GET
 * Endpoint: /dedicated/server/{serviceName}/networkInterfaceController/{nicId}/mrtg
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const nicId = this.getNodeParameter('nicId', _itemIndex) as string;

	const data = (await client.httpGet(
		`/dedicated/server/${encodeURIComponent(String(serviceName))}/networkInterfaceController/${encodeURIComponent(String(nicId))}/mrtg`,
	)) as IDataObject;
	const inputData = this.getInputData()[_itemIndex];
	return this.helpers.returnJsonArray([{ ...inputData.json, ...data }]);
}
