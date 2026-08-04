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
			displayName: 'Active',
			name: 'active',
			type: 'boolean',
			default: false,
			description: 'Whether to filter the value of active property (=)',
			displayOptions,
		},
		{
			displayName: 'Branch',
			name: 'branch',
			type: 'string',
			default: '',
			description: 'Filter the value of branch property (=)',
			displayOptions,
		},
		{
			displayName: 'Latest',
			name: 'latest',
			type: 'boolean',
			default: false,
			description: 'Whether to filter the value of latest property (=)',
			displayOptions,
		},
	];
}

/**
 * IDs of all modules available
 *
 * HTTP method: GET
 * Endpoint: /hosting/web/moduleList
 */
export async function execute(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const qs: IDataObject = {};
	const active = this.getNodeParameter('active', itemIndex, false) as boolean;
	const branch = this.getNodeParameter('branch', itemIndex, '') as string;
	const latest = this.getNodeParameter('latest', itemIndex, false) as boolean;
	if (active !== false) qs.active = active;
	if (branch) qs.branch = branch;
	if (latest !== false) qs.latest = latest;
	const data = (await client.httpGet('/hosting/web/moduleList', qs)) as IDataObject;
	const inputData = this.getInputData()[itemIndex];
	return this.helpers.returnJsonArray([{ ...inputData.json, ...data }]);
}
