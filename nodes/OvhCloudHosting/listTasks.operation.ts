/* eslint-disable n8n-nodes-base/node-filename-against-convention, n8n-nodes-base/node-param-display-name-not-first-position */
import type {
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { getClient } from '../../shared/transport/ApiClient';
import { filtersCollection, type FilterDefinition } from '../../shared/nodes/filterOptions';
import { buildFilterQuery } from '../../shared/nodes/filterQuery';

export const HOSTING_TASK_FILTERS: FilterDefinition[] = [
	{
		group: 'search',
		groupDisplayName: 'Search',
		name: 'value',
		displayName: 'Function',
		queryParam: 'function',
		type: 'string',
		default: '',
		description: 'Filter tasks by function (partial match)',
	},
	{
		group: 'status',
		groupDisplayName: 'Status',
		name: 'value',
		displayName: 'Status',
		queryParam: 'status',
		type: 'options',
		default: 'cancelled',
		description: 'Filter tasks by status (partial match)',
		options: [
			{ name: 'Cancelled', value: 'cancelled' },
			{ name: 'Doing', value: 'doing' },
			{ name: 'Done', value: 'done' },
			{ name: 'Init', value: 'init' },
			{ name: 'Todo', value: 'todo' },
		],
	},
];

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'resourceLocator',
			default: { mode: 'list', value: '' },
			required: true,
			description: 'The hosting web service name',
			modes: [
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					typeOptions: { searchListMethod: 'getHostingWebServices', searchable: true },
				},
				{
					displayName: 'By Name',
					name: 'name',
					type: 'string',
					placeholder: 'myservice.ovh',
				},
			],
			displayOptions,
		},
		...filtersCollection(displayOptions, HOSTING_TASK_FILTERS),
	];
}

export async function execute(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const inputData = this.getInputData()[_itemIndex];
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex, '', {
		extractValue: true,
	}) as string;
	const tasks = (await client.httpGet(
		`/hosting/web/${serviceName}/tasks`,
		buildFilterQuery(this, _itemIndex, HOSTING_TASK_FILTERS),
	)) as number[];
	const outputData = { ...inputData.json, tasks };
	return this.helpers.returnJsonArray(outputData);
}
