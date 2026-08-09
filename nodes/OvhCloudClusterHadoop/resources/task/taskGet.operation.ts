import type {
	IDisplayOptions,
	IDataObject,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

const TASK_STATUSES: { name: string; value: string }[] = [
	{ name: 'Cancelled', value: 'cancelled' },
	{ name: 'Doing', value: 'doing' },
	{ name: 'Done', value: 'done' },
	{ name: 'Error', value: 'error' },
	{ name: 'Todo', value: 'todo' },
];

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Cluster Hadoop Service Name',
			name: 'serviceName',
			type: 'resourceLocator',
			default: { mode: 'list', value: '' },
			required: true,
			description: 'The internal name of your Hadoop cluster',
			modes: [
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					typeOptions: { searchListMethod: 'getClusterHadoopServices', searchable: true },
				},
				{
					displayName: 'By Name',
					name: 'name',
					type: 'string',
					placeholder: 'cluster-12345',
				},
			],
			displayOptions,
		},
		{
			displayName: 'Status',
			name: 'status',
			type: 'options',
			default: 'done',
			options: TASK_STATUSES,
			description: 'Filter the value of status property',
			displayOptions,
		},
	];
}

/**
 * List the tasks associated with a Hadoop cluster.
 *
 * HTTP method: GET
 * Endpoint: /cluster/hadoop/{serviceName}/task
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0, '', { extractValue: true }) as string;
	const status = (this.getNodeParameter('status', _itemIndex ?? 0, '') as string) || '';

	const qs: IDataObject = {};
	if (status) qs.status = status;
	const data = (await client.httpGet(
		`/cluster/hadoop/${encodeURIComponent(serviceName)}/task`,
		qs,
	)) as unknown[];
	const items = data.map((item) =>
		typeof item === 'number' ? { taskId: item } : (item as IDataObject),
	) as IDataObject[];
	return this.helpers.returnJsonArray(items);
}
