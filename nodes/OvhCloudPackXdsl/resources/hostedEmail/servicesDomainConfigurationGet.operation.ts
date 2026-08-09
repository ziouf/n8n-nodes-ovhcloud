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
			displayName: 'Domain',
			name: 'domain',
			type: 'string',
			default: '',
			required: true,
			description: 'The domain name',
			displayOptions,
		},
	];
}

/**
 * Get hosted email configuration information.
 *
 * HTTP method: GET
 * Endpoint: /pack/xdsl/{packName}/hostedEmail/services/{domain}/configuration
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const packName = this.getNodeParameter('packName', _itemIndex ?? 0, '', { extractValue: true }) as string;
	const domain = this.getNodeParameter('domain', _itemIndex ?? 0) as string;
	const data = (await client.httpGet(
		`/pack/xdsl/${encodeURIComponent(packName)}/hostedEmail/services/${encodeURIComponent(domain)}/configuration`,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
