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
			displayName: 'Node ID',
			name: 'nodeId',
			type: 'string',
			default: '',
			required: true,
			description: 'The node identifier to update',
			placeholder: 'e.g. 123456',
			displayOptions,
		},
		{
			displayName: 'Node Properties',
			name: 'node',
			type: 'json',
			default: '{}',
			description: 'New node properties to update',
			displayOptions,
		},
	];
}

/**
 * Executes the Update Cluster Node operation.
 *
 * HTTP method: PUT
 * Endpoint: /dedicated/cluster/{serviceName}/node/{nodeId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const nodeId = (this.getNodeParameter('nodeId', _itemIndex ?? 0) as string) || '';
	const node = this.getNodeParameter('node', _itemIndex ?? 0) as IDataObject;
	await client.httpPut(`/dedicated/cluster/${serviceName}/node/${nodeId}`, node);
	return this.helpers.returnJsonArray([{ nodeId, success: true }]);
}
