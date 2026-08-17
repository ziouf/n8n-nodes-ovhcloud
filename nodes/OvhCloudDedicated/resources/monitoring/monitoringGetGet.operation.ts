import type { IDataObject, IDisplayOptions, IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { getClient } from '../../../../shared/transport/ApiClient';
import { serviceNameLocator } from '../../../../shared/nodes/locators';

export function description(displayOptions: IDisplayOptions) {
	return [
				{
			...serviceNameLocator({
			searchListMethod: 'getDedicatedServerServices',
			displayName: 'Dedicated Server Service Name',
			description: 'The dedicated server service name (e.g. ns123456.ip-123-45-678.eu)',
			placeholder: 'ns123456.ip-123-45-678.eu',
			}),
			displayOptions,
		},
	];
}

/**
 * Executes the Get Monitoring operation.
 *
 * HTTP method: GET
 * Endpoint: /dedicated/server/{serviceName}/monitoring
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const data = (await client.httpGet(`/dedicated/server/${serviceName}/monitoring`)) as unknown as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
