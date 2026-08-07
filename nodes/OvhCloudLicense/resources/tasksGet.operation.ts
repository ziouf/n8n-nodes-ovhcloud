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
			displayName: 'License Service Name',
			name: 'serviceName',
			type: 'resourceLocator',
			default: { mode: 'list', value: '' },
			required: true,
			description: 'The WorkLight license service name (e.g. license-1)',
			modes: [
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					typeOptions: { searchListMethod: 'getWorkLightLicenses', searchable: true },
				},
				{
					displayName: 'By Name',
					name: 'name',
					type: 'string',
					placeholder: 'license-1',
				},
			],
			displayOptions,
		},
		{
			displayName: 'Status',
			name: 'status',
			type: 'options',
			default: '',
			options: [
				{ name: 'All', value: '' },
				{ name: 'In Progress', value: 'in_progress' },
				{ name: 'Completed', value: 'completed' },
				{ name: 'Failed', value: 'failed' },
			],
			description: 'Filter tasks by status',
			displayOptions,
		},
		{
			displayName: 'Action',
			name: 'action',
			type: 'options',
			default: '',
			options: [
				{ name: 'All', value: '' },
				{ name: 'Terminate', value: 'terminate' },
				{ name: 'Move', value: 'move' },
			],
			description: 'Filter tasks by action',
			displayOptions,
		},
	];
}

/**
 * Get the list of tasks for a WorkLight license.
 *
 * HTTP method: GET
 * Endpoint: /license/worklight/{serviceName}/tasks
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, '', { extractValue: true }) as string;
	const status = (this.getNodeParameter('status', 0, '') as string) || '';
	const action = (this.getNodeParameter('action', 0, '') as string) || '';

	const qs: IDataObject = {};
	if (status) qs.status = status;
	if (action) qs.action = action;

	const data = (await client.httpGet(
		`/license/worklight/${encodeURIComponent(serviceName)}/tasks`,
		qs,
	)) as IDataObject[];
	return this.helpers.returnJsonArray(data);
}
