import type { IDataObject, IDisplayOptions, IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
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
			description: 'The node identifier',
			placeholder: 'e.g. 123456',
			displayOptions,
		},
	];
}

/**
 * Executes the Get Cluster Node operation.
 *
 * HTTP method: GET
 * Endpoint: /dedicated/cluster/{serviceName}/node/{nodeId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const nodeId = (this.getNodeParameter('nodeId', _itemIndex ?? 0) as string) || '';
	const data = (await client.httpGet(`/dedicated/cluster/${serviceName}/node/${nodeId}`)) as unknown as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
