import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../../shared/transport/ApiClient';
import { type FilterDefinition } from '../../../../shared/nodes/filterOptions';
import { buildFilterQuery } from '../../../../shared/nodes/filterQuery';

// ── Filter definitions (parameterPath mode — read from flat params) ──────

export const SSL_TASKS_LIST_FILTERS: FilterDefinition[] = [
	{
		group: 'function',
		groupDisplayName: 'Function',
		name: 'function',
		displayName: 'Function',
		queryParam: 'function',
		type: 'options',
		parameterPath: 'function',
		default: 'flush',
		options: [
			{ name: 'Flush', value: 'flush' },
			{ name: 'Flush All', value: 'flushAll' },
			{ name: 'Generate SSL', value: 'generateSsl' },
			{ name: 'Install SSL', value: 'installSsl' },
			{ name: 'Reinstall SSL', value: 'reinstallSsl' },
			{ name: 'Remove Domain', value: 'removeDomain' },
			{ name: 'Uninstall SSL', value: 'uninstallSsl' },
			{ name: 'Update Cache Rule', value: 'updateCacheRule' },
		],
	},
	{
		group: 'status',
		groupDisplayName: 'Status',
		name: 'status',
		displayName: 'Status',
		queryParam: 'status',
		type: 'options',
		parameterPath: 'status',
		default: 'cancelled',
		options: [
			{ name: 'Cancelled', value: 'cancelled' },
			{ name: 'Doing', value: 'doing' },
			{ name: 'Done', value: 'done' },
			{ name: 'Error', value: 'error' },
			{ name: 'Todo', value: 'todo' },
		],
	},
];

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The internal name of your CDN offer',
			displayOptions,
		},
		{
			displayName: 'Function',
			name: 'function',
			type: 'options',
			default: 'flush',
			options: [
				{ name: 'Flush', value: 'flush' },
				{ name: 'Flush All', value: 'flushAll' },
				{ name: 'Generate SSL', value: 'generateSsl' },
				{ name: 'Install SSL', value: 'installSsl' },
				{ name: 'Reinstall SSL', value: 'reinstallSsl' },
				{ name: 'Remove Domain', value: 'removeDomain' },
				{ name: 'Uninstall SSL', value: 'uninstallSsl' },
				{ name: 'Update Cache Rule', value: 'updateCacheRule' },
			],
			description: 'Filter the value of function property (=)',
			displayOptions,
		},
		{
			displayName: 'Status',
			name: 'status',
			type: 'options',
			default: 'cancelled',
			options: [
				{ name: 'Cancelled', value: 'cancelled' },
				{ name: 'Doing', value: 'doing' },
				{ name: 'Done', value: 'done' },
				{ name: 'Error', value: 'error' },
				{ name: 'Todo', value: 'todo' },
			],
			description: 'Filter the value of status property (=)',
			displayOptions,
		},
	];
}

/**
 * Executes the Get ListSslTasks operation.
 *
 * HTTP method: GET
 * Endpoint: /cdn/dedicated/{serviceName}/ssl/tasks
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;

	const client = getClient(this);
	const qs = buildFilterQuery(this, _itemIndex, SSL_TASKS_LIST_FILTERS);
	const data = (await client.httpGet(
		`/cdn/dedicated/${encodeURIComponent(serviceName)}/ssl/tasks`,
		qs,
	)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
