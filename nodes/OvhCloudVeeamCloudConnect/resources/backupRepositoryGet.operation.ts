import type {
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
	IDisplayOptions,
	IDataObject,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Veeam Cloud Connect Service Name',
			name: 'serviceName',
			type: 'resourceLocator',
			default: { mode: 'list', value: '' },
			required: true,
			description: 'The domain of the Veeam Cloud Connect service (e.g. vcc-12345)',
			modes: [
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					typeOptions: { searchListMethod: 'getVeeamCloudConnectServices', searchable: true },
				},
				{
					displayName: 'By Name',
					name: 'name',
					type: 'string',
					placeholder: 'vcc-12345',
				},
			],
			displayOptions,
		},
	];
}

/**
 * Retrieve a list of backup repositories for a service.
 *
 * HTTP method: GET
 * Endpoint: /veeamCloudConnect/{serviceName}/backupRepository
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0, '', { extractValue: true }) as string;
	const data = (await client.httpGet(
		`/veeamCloudConnect/${encodeURIComponent(serviceName)}/backupRepository`,
	)) as unknown[];
	const items = data.map((item) =>
		typeof item === 'string' ? { inventoryName: item } : (item as IDataObject),
	) as IDataObject[];
	return this.helpers.returnJsonArray(items);
}
