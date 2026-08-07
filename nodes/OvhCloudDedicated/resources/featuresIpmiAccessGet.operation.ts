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
			description: 'Get IPMI access info',
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
			description: 'IPMI access type',
			displayOptions,
		},
	];
}

/**
 * Get IPMI access info
 *
 * HTTP method: GET
 * Endpoint: /dedicated/server/{serviceName}/features/ipmi/access
 */
export async function execute(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const type = this.getNodeParameter('type', itemIndex) as string;

	const qs: IDataObject = {};
	if (type) {
		qs.type = type;
	}

	const data = (await client.httpGet(
		`/dedicated/server/${encodeURIComponent(String(serviceName))}/features/ipmi/access`,
		{ qs },
	)) as IDataObject;
	const inputData = this.getInputData()[itemIndex];
	return this.helpers.returnJsonArray([{ ...inputData.json, ...data }]);
}
