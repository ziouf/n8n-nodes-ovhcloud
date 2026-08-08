import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';
import { fullObjectsListOptions } from '../../../shared/nodes/listOptions';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		...fullObjectsListOptions({
			...displayOptions,
			show: { dedicatedServerOperation: ['list'] },
		}),
	];
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const returnFullObjects = this.getNodeParameter('returnFullObjects', 0, false) as boolean;
	const maxItems = this.getNodeParameter('maxItems', 0, 1000) as number;

	if (returnFullObjects) {
		const skippedIds: string[] = [];
		const data = await client.paginateResources<IDataObject>(
			'/dedicated/server',
			'/dedicated/server/{id}',
			{
				maxItems,
				onSkipped: (id) => {
					skippedIds.push(id);
				},
			},
		);
		if (skippedIds.length > 0) {
			data.unshift({
				warning: `${skippedIds.length} resource(s) could not be fetched and were skipped`,
				skippedIds,
			});
		}
		return this.helpers.returnJsonArray(data);
	}

	const data = (await client.httpGet('/dedicated/server')) as string[];
	return this.helpers.returnJsonArray(data.map((name) => ({ name })));
}
