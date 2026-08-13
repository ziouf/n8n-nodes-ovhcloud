import type {
	IDisplayOptions,
	IDataObject,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Pack Xdsl Service Name',
			name: 'packName',
			type: 'resourceLocator',
			default: { mode: 'list', value: '' },
			required: true,
			description: 'The internal name of your pack',
			modes: [
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					typeOptions: { searchListMethod: 'getPackXdslServices', searchable: true },
				},
				{
					displayName: 'By Name',
					name: 'name',
					type: 'string',
					placeholder: 'packabcd-ovh',
				},
			],
			displayOptions,
		},
		{
			displayName: 'Building Reference',
			name: 'buildingReference',
			type: 'string',
			default: '',
			description: 'Building reference for FTTH and FTTE offers',
			displayOptions,
		},
	];
}

/**
 * Get the possibilities of migration offers available.
 *
 * HTTP method: POST
 * Endpoint: /pack/xdsl/{packName}/migration/offers
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const packName = this.getNodeParameter('packName', _itemIndex ?? 0, '', { extractValue: true }) as string;
	const buildingReference = (this.getNodeParameter('buildingReference', _itemIndex ?? 0, '') as string) || '';

	const body: IDataObject = {};
	if (buildingReference) body.buildingReference = buildingReference;
	const data = (await client.httpPost(
		`/pack/xdsl/${encodeURIComponent(packName)}/migration/offers`,
		body,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
