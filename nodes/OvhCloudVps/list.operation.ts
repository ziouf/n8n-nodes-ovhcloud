import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';
import { fullObjectsListOptions } from '../../shared/nodes/listOptions';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		...fullObjectsListOptions({
			...displayOptions,
			show: { vpsOperation: ['list'] },
		}),
	];
}

export async function execute(
	this: IExecuteFunctions,
	_itemIndex?: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const returnFullObjects = this.getNodeParameter(
		'returnFullObjects',
		_itemIndex ?? 0,
		false,
	) as boolean;
	const maxItems = this.getNodeParameter('maxItems', _itemIndex ?? 0, 1000) as number;

	if (returnFullObjects) {
		const skippedIds: string[] = [];
		const data = await client.paginateResources<IDataObject>('/vps', '/vps/{id}', {
			maxItems,
			onSkipped: (id) => {
				skippedIds.push(id);
			},
		});
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

	const data = (await client.httpGet('/vps')) as string[];
	return this.helpers.returnJsonArray(data.map((name) => ({ name })));
}
