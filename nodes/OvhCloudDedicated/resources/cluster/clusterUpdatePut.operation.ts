import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
} from 'n8n-workflow';
import { getClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions) {
	return [
		{
			displayName: 'Cluster Service Name',
			name: 'serviceName',
			type: 'resourceLocator',
			default: { mode: 'list', value: '' },
			required: true,
			modes: [
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					typeOptions: { searchListMethod: 'clusterListGet' },
				},
				{
					displayName: 'By Name',
					name: 'name',
					type: 'string',
					placeholder: 'my-cluster',
				},
			],
			displayOptions,
		},
		{
			displayName: 'Cluster Properties',
			name: 'cluster',
			type: 'json',
			default: '{}',
			description: 'New cluster properties to update',
			displayOptions,
		},
	];
}

/**
 * Executes the Update Cluster operation.
 *
 * HTTP method: PUT
 * Endpoint: /dedicated/cluster/{serviceName}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const cluster = this.getNodeParameter('cluster', _itemIndex ?? 0) as IDataObject;
	await client.httpPut(`/dedicated/cluster/${serviceName}`, cluster);
	return this.helpers.returnJsonArray([{ serviceName, success: true }]);
}
