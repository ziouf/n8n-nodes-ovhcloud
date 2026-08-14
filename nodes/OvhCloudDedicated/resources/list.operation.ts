import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';
import { fullObjectsListOptions } from '../../../shared/nodes/listOptions';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		...fullObjectsListOptions({
			...displayOptions,
			show: { dedicatedServerOperation: ['list'] },
		}),
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

	if (returnFullObjects) {
		const skippedIds: string[] = [];
		const ids = (await client.httpGet('/dedicated/server')) as string[];
		const cappedIds = ids.slice(0, maxItems);
		const data: IDataObject[] = [];
		for (const id of cappedIds) {
			try {
				data.push((await client.httpGet(`/dedicated/server/${id}`)) as IDataObject);
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

	const data = (await client.httpGet('/dedicated/server')) as string[];
	return this.helpers.returnJsonArray(data.map((name) => ({ name })));
}
