/* eslint-disable n8n-nodes-base/node-filename-against-convention, n8n-nodes-base/node-param-display-name-not-first-position */
import type {
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../shared/transport/ApiClient';
import { filtersCollection, type FilterDefinition } from '../../shared/nodes/filterOptions';
import { buildFilterQuery } from '../../shared/nodes/filterQuery';

// ── Filter definitions ──────────────────────────────────────────────────
export const IAM_POLICY_LIST_FILTERS: FilterDefinition[] = [
	{
		group: 'action',
		groupDisplayName: 'Action',
		name: 'value',
		displayName: 'Action URNs',
		queryParam: 'action',
		type: 'string',
		delimiter: ',',
		default: '',
		description:
			'Comma-separated action URNs (e.g. "account:apiovh:me/get,account:apiovh:me/*"). Sent as an array to the API.',
	},
	{
		group: 'identity',
		groupDisplayName: 'Identity',
		name: 'value',
		displayName: 'Identities',
		queryParam: 'identity',
		type: 'string',
		delimiter: ',',
		default: '',
		description: 'Comma-separated identity URNs. Sent as an array to the API.',
	},
	{
		group: 'resourceURN',
		groupDisplayName: 'Resource URN',
		name: 'value',
		displayName: 'Resource URNs',
		queryParam: 'resourceURN',
		type: 'string',
		delimiter: ',',
		default: '',
		description: 'Comma-separated resource URNs. Sent as an array to the API.',
	},
	{
		group: 'readOnly',
		groupDisplayName: 'Read Only',
		name: 'value',
		displayName: 'Read Only',
		queryParam: 'readOnly',
		type: 'options',
		default: true,
		options: [
			{ name: 'Yes', value: true },
			{ name: 'No', value: false },
		],
	},
	{
		group: 'details',
		groupDisplayName: 'Details',
		name: 'value',
		displayName: 'Details',
		queryParam: 'details',
		type: 'options',
		default: true,
		options: [
			{ name: 'Yes', value: true },
			{ name: 'No', value: false },
		],
	},
];
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [...filtersCollection(displayOptions, IAM_POLICY_LIST_FILTERS)];
}

/**
 * Executes the Get Retrieve all policies operation.
 *
 * HTTP method: GET
 * Endpoint: /iam/policy
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex?: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const qs = buildFilterQuery(this, _itemIndex ?? 0, IAM_POLICY_LIST_FILTERS);
	const data = (await client.httpGet('/iam/policy', qs)) as unknown[];

	if (!Array.isArray(data)) {
		return this.helpers.returnJsonArray([data]);
	}

	return this.helpers.returnJsonArray(data.map((item) => item as INodeExecutionData));
}
