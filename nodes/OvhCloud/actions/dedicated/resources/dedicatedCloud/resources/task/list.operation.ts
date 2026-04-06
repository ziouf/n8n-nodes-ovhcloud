import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../../transport/ApiClient';

/**
 * Description for List Tasks operation.
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'resourceLocator',
			default: { mode: 'str', value: '' },
			required: true,
			modes: [
				{
					displayName: 'By Name',
					name: 'str',
					type: 'string',
					placeholder: 'Enter the service name',
				},
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					placeholder: 'Select from the list',
					typeOptions: {
						searchListMethod: 'getDedicatedCloudServices',
						searchable: true,
					},
				},
			],
			displayOptions,
		},
		{
			displayName: 'Status',
			name: 'status',
			type: 'options',
			options: [
				{
					name: 'Doing',
					value: 'doing',
				},
				{
					name: 'Done',
					value: 'done',
				},
				{
					name: 'Error',
					value: 'error',
				},
				{
					name: 'Todo',
					value: 'todo',
				},
			],
			default: 'doing',
			description: 'Filter tasks by status',
			displayOptions,
		},
		{
			displayName: 'Type',
			name: 'type',
			type: 'string',
			default: '',
			description: 'Filter tasks by type',
			displayOptions,
		},
	];
}

/**
 * Executes the List Tasks operation.
 *
 * HTTP method: GET
 * Endpoint: /dedicatedCloud/{serviceName}/task
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, { extractValue: true }) as string;
	const status = this.getNodeParameter('status', 0, '') as string;
	const type = this.getNodeParameter('type', 0, '') as string;

	const qs: IDataObject = {};
	if (status) qs.status = status;
	if (type) qs.type = type;

	const data = (await client.httpGet(
		`/dedicatedCloud/${serviceName}/task`,
		Object.keys(qs).length > 0 ? qs : undefined,
	)) as IDataObject[];
	return this.helpers.returnJsonArray(data);
}
