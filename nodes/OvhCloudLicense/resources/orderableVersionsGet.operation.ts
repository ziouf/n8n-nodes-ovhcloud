import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'IP',
			name: 'ip',
			type: 'string',
			default: '',
			required: true,
			description: 'The IP address of your WorkLight license (e.g. 123.45.67.89)',
			displayOptions,
		},
	];
}

/**
 * Get the orderable WorkLight versions.
 *
 * HTTP method: GET
 * Endpoint: /license/worklight/orderableVersions?ip={ip}
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const ip = this.getNodeParameter('ip', 0) as string;
	const data = (await client.httpGet(
		`/license/worklight/orderableVersions?ip=${encodeURIComponent(ip)}`,
	)) as IDataObject[];
	return this.helpers.returnJsonArray(data);
}
