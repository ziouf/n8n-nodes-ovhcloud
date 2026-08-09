import type {
	IDisplayOptions,
	IDataObject,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

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
			displayName: 'Description',
			name: 'description',
			type: 'string',
			default: '',
			description: 'Editable description of the pack',
			displayOptions,
		},
	];
}

/**
 * Alter this object properties.
 *
 * HTTP method: PUT
 * Endpoint: /pack/xdsl/{packName}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const packName = this.getNodeParameter('packName', _itemIndex ?? 0, '', { extractValue: true }) as string;
	const description = (this.getNodeParameter('description', _itemIndex ?? 0, '') as string) || '';

	const body: IDataObject = {};
	if (description) body.description = description;
	await client.httpPut(`/pack/xdsl/${encodeURIComponent(packName)}`, body);

	return this.helpers.returnJsonArray([{ packName, success: true }]);
}
