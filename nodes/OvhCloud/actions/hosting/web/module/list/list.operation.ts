import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../transport/ApiClient';

/**
 * @brief IDs of all modules available operation for Web Hosting
 *
 * HTTP GET request to `/hosting/web/moduleList` endpoint.
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the operation
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [		{
			displayName: 'Active',
			name: 'active',
			type: 'string',
			default: '',
			description: 'Filter the value of active property (=)',
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
			type: 'string',
			default: '',
			description: 'Filter the value of latest property (=)',
			displayOptions,
		},
	];
}

/**
 * Executes the IDs of all modules available operation.
 *
 * HTTP method: GET
 * Endpoint: /hosting/web/moduleList
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const active = this.getNodeParameter('active', 0) as string;
	const branch = this.getNodeParameter('branch', 0) as string;
	const latest = this.getNodeParameter('latest', 0) as string;
	const data = (await client.httpGet(`/hosting/web/moduleList`, { qs: { active, branch, latest } })) as IDataObject;
	return this.helpers.returnJsonArray(data as unknown as IDataObject[]);
}
