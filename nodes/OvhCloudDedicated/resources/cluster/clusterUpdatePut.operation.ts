import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
} from 'n8n-workflow';
import { getClient } from '../../../../shared/transport/ApiClient';
import { serviceNameLocator } from '../../../../shared/nodes/locators';

export function description(displayOptions: IDisplayOptions) {
	return [
				{
			...serviceNameLocator({
			searchListMethod: 'clusterListGet',
			displayName: 'Cluster Service Name',
			description: '',
			placeholder: 'my-cluster',
			}),
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
