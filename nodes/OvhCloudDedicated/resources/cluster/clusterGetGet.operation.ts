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
	];
}

/**
 * Executes the Get Cluster operation.
 *
 * HTTP method: GET
 * Endpoint: /dedicated/cluster/{serviceName}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const data = (await client.httpGet(`/dedicated/cluster/${serviceName}`)) as unknown as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
