/* eslint-disable n8n-nodes-base/node-filename-against-convention */
import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../shared/transport/ApiClient';
import { fullObjectsListOptions } from '../../shared/nodes/listOptions';
import { filtersCollection, type FilterDefinition } from '../../shared/nodes/filterOptions';
import { buildFilterQuery } from '../../shared/nodes/filterQuery';

// ── Filter definitions ──────────────────────────────────────────────────

export const VPS_LIST_FILTERS: FilterDefinition[] = [
	{
		displayName: 'IAM Tags',
		name: 'value',
		group: 'iamTags',
		groupDisplayName: 'IAM Tags',
		queryParam: 'iamTags',
		type: 'json',
		default: '',
		description:
			'JSON object mapping tag keys to filter arrays, e.g. {"environment":[{"operator":"EQ","value":"prod"}]}. Operators: EQ, EXISTS, ILIKE, LIKE, NEQ, NEXISTS.',
	},
];

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		...fullObjectsListOptions({
			...displayOptions,
			show: { vpsOperation: ['list'] },
		}),
		...filtersCollection(displayOptions, VPS_LIST_FILTERS),
	];
}

export async function execute(
	this: IExecuteFunctions,
	_itemIndex?: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const returnFullObjects = this.getNodeParameter(
		'returnFullObjects',
		_itemIndex ?? 0,
		false,
	) as boolean;
	const maxItems = this.getNodeParameter('maxItems', _itemIndex ?? 0, 1000) as number;

	const qs = buildFilterQuery(this, _itemIndex ?? 0, VPS_LIST_FILTERS);

	if (returnFullObjects) {
		const skippedIds: string[] = [];
		const ids = (await client.httpGet('/vps', qs)) as string[];
		const cappedIds = ids.slice(0, maxItems);
		const data: IDataObject[] = [];
		for (const id of cappedIds) {
			try {
				data.push((await client.httpGet(`/vps/${id}`)) as IDataObject);
			} catch {
				skippedIds.push(id);
			}
		}
		if (skippedIds.length > 0) {
			const items = this.helpers.returnJsonArray(data);
			items.push({
				json: {
					warning: `${skippedIds.length} resource(s) could not be fetched and were skipped`,
					skippedIds,
				},
				pairedItem: { item: _itemIndex ?? 0 },
			});
			return items;
		}
		return this.helpers.returnJsonArray(data);
	}

	const data = (await client.httpGet('/vps', qs)) as string[];
	return this.helpers.returnJsonArray(data.map((name) => ({ name })));
}
