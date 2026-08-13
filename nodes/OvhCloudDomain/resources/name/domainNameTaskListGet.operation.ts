/* eslint-disable n8n-nodes-base/node-filename-against-convention, n8n-nodes-base/node-param-display-name-not-first-position */
import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../../shared/transport/ApiClient';
import { buildFilterQuery } from '../../../../shared/nodes/filterQuery';
import type { FilterDefinition } from '../../../../shared/nodes/filterOptions';
import { filtersCollection } from '../../../../shared/nodes/filterOptions';

export const DOMAIN_NAME_TASK_FILTERS: FilterDefinition[] = [
	{
		group: 'search',
		groupDisplayName: 'Search',
		name: 'value',
		displayName: 'Function',
		queryParam: 'function',
		type: 'string',
		default: '',
		description: 'Filter the value of function property (partial match)',
	},
	{
		group: 'status',
		groupDisplayName: 'Status',
		name: 'value',
		displayName: 'Status',
		queryParam: 'status',
		type: 'options',
		default: 'todo',
		options: [
			{ name: 'Cancelled', value: 'cancelled' },
			{ name: 'Doing', value: 'doing' },
			{ name: 'Done', value: 'done' },
			{ name: 'Error', value: 'error' },
			{ name: 'Problem', value: 'problem' },
			{ name: 'Todo', value: 'todo' },
		],
	},
	{
		group: 'type',
		groupDisplayName: 'Type',
		name: 'value',
		displayName: 'Type',
		queryParam: 'type',
		type: 'options',
		default: 'domain',
		options: [
			{ name: 'AllDom', value: 'alldom' },
			{ name: 'Domain', value: 'domain' },
		],
	},
];

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Domain Name',
			name: 'domainName',
			type: 'string',
			default: '',
			required: true,
			description: 'The domainName identifier',
			displayOptions,
		},
		...filtersCollection(displayOptions, DOMAIN_NAME_TASK_FILTERS),
	];
}

/**
 * Executes the List tasks related to a managed domain name resource operation.
 *
 * HTTP method: GET
 * Endpoint: /domain/name/{domainName}/task
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const domainName = this.getNodeParameter('domainName', _itemIndex) as string;

	const data = (await client.httpGet(
		`/domain/name/${encodeURIComponent(domainName)}/task`,
		buildFilterQuery(this, _itemIndex, DOMAIN_NAME_TASK_FILTERS),
	)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
