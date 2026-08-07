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
			description: 'Get intervention details',
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
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const interventionId = this.getNodeParameter('interventionId', itemIndex) as string;

	const data = (await client.httpGet(
		`/dedicated/server/${encodeURIComponent(String(serviceName))}/intervention/${encodeURIComponent(String(interventionId))}`,
	)) as IDataObject;
	const inputData = this.getInputData()[itemIndex];
	return this.helpers.returnJsonArray([{ ...inputData.json, ...data }]);
}
