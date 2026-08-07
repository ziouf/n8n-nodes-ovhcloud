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
			description: 'List boot options',
			displayOptions,
		},
		{
			displayName: 'Boot ID',
			name: 'bootId',
			type: 'string',
			default: '',
			required: true,
			description: 'List boot options',
			displayOptions,
		},
	];
}

/**
 * List boot options
 *
 * HTTP method: GET
 * Endpoint: /dedicated/server/{serviceName}/boot/{bootId}/option
 */
export async function execute(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const bootId = this.getNodeParameter('bootId', itemIndex) as string;

	const data = (await client.httpGet(
		`/dedicated/server/${encodeURIComponent(String(serviceName))}/boot/${encodeURIComponent(String(bootId))}/option`,
	)) as IDataObject;
	const inputData = this.getInputData()[itemIndex];
	return this.helpers.returnJsonArray([{ ...inputData.json, ...data }]);
}
