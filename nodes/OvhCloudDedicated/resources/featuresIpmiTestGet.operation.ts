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
			description: 'Test IPMI connection',
			displayOptions,
		},
		{
			displayName: 'Type',
			name: 'type',
			type: 'options',
			options: [
				{ name: 'Ipmi', value: 'ipmi' },
			],
			default: 'ipmi',
			description: 'IPMI test type',
			displayOptions,
		},
	];
}

/**
 * Test IPMI connection
 *
 * HTTP method: GET
 * Endpoint: /dedicated/server/{serviceName}/features/ipmi/test
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const type = this.getNodeParameter('type', _itemIndex) as string;

	const qs: IDataObject = {};
	if (type) {
		qs.type = type;
	}

	const data = (await client.httpGet(
		`/dedicated/server/${encodeURIComponent(String(serviceName))}/features/ipmi/test`,
		{ qs },
	)) as IDataObject;
	const inputData = this.getInputData()[_itemIndex];
	return this.helpers.returnJsonArray([{ ...inputData.json, ...data }]);
}
