import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * @brief List DNS Zone Tasks operation
 *
 * Lists tasks for a DNS zone.
 *
 * HTTP method: GET
 * Endpoint: /domain/zone/{zoneName}/task
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Zone Name',
			name: 'zoneName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the DNS zone',
			displayOptions,
		},
		{
			displayName: 'Function',
			name: 'function',
			type: 'string',
			default: '',
			description: 'Filter by task function',
			displayOptions,
		},
		{
			displayName: 'Status',
			name: 'status',
			type: 'string',
			default: '',
			description: 'Filter by task status',
			displayOptions,
		},
	];
}

/**
 * Executes the List DNS Zone Tasks operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const zoneName = this.getNodeParameter('zoneName', 0) as string;

	const qs: IDataObject = {};
	const func = this.getNodeParameter('function', 0, '') as string;
	const status = this.getNodeParameter('status', 0, '') as string;
	if (func) qs.function = func;
	if (status) qs.status = status;

	const data = (await client.httpGet(`/domain/zone/${zoneName}/task`, qs)) as IDataObject[];
	return this.helpers.returnJsonArray(data);
}
