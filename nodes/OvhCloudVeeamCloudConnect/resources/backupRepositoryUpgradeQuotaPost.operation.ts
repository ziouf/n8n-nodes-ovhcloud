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
		{
			displayName: 'Inventory Name',
			name: 'inventoryName',
			type: 'string',
			default: '',
			required: true,
			description: 'The inventory name of your backup repository',
			displayOptions,
		},
		{
			displayName: 'New Quota',
			name: 'newQuota',
			type: 'number',
			default: 200,
			required: true,
			description: 'New quota in GB',
			displayOptions,
		},
	];
}

/**
 * Change the quota for a specific backup repository.
 *
 * HTTP method: POST
 * Endpoint: /veeamCloudConnect/{serviceName}/backupRepository/{inventoryName}/upgradeQuota
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0, '', { extractValue: true }) as string;
	const inventoryName = this.getNodeParameter('inventoryName', _itemIndex ?? 0) as string;
	const newQuota = this.getNodeParameter('newQuota', _itemIndex ?? 0, 200) as number;

	const body: IDataObject = {};
	if (newQuota !== undefined) body.newQuota = newQuota;
	const data = (await client.httpPost(
		`/veeamCloudConnect/${encodeURIComponent(serviceName)}/backupRepository/${encodeURIComponent(inventoryName)}/upgradeQuota`,
		body,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
