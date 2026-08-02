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
	];
}

/**
 * Delete a specific backup repository.
 *
 * HTTP method: DELETE
 * Endpoint: /veeamCloudConnect/{serviceName}/backupRepository/{inventoryName}
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, '', { extractValue: true }) as string;
	const inventoryName = this.getNodeParameter('inventoryName', 0) as string;
	const data = (await client.httpDelete(
		`/veeamCloudConnect/${encodeURIComponent(serviceName)}/backupRepository/${encodeURIComponent(inventoryName)}`,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
