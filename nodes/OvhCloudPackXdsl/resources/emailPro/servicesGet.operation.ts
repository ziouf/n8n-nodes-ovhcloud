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
	];
}

/**
 * List the Email Pro services.
 *
 * HTTP method: GET
 * Endpoint: /pack/xdsl/{packName}/emailPro/services
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const packName = this.getNodeParameter('packName', 0, '', { extractValue: true }) as string;
	const data = (await client.httpGet(
		`/pack/xdsl/${encodeURIComponent(packName)}/emailPro/services`,
	)) as unknown[];
	const items = data.map((item) =>
		typeof item === 'string' ? { email: item } : (item as IDataObject),
	) as IDataObject[];
	return this.helpers.returnJsonArray(items);
}
