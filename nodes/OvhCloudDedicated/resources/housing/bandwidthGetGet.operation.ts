import type { IDataObject, IDisplayOptions, IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { getClient } from '../../../../shared/transport/ApiClient';
import { serviceNameLocator } from '../../../../shared/nodes/locators';

export function description(displayOptions: IDisplayOptions) {
	return [
				{
					...serviceNameLocator({
						searchListMethod: 'housingListGet',
						displayName: 'Housing Service Name',
						description: '',
						placeholder: 'h12345678.ovh.net',
					}),
					displayOptions,
				},
	];
}

/**
 * Executes the Get Housing Bandwidth operation.
 *
 * HTTP method: GET
 * Endpoint: /dedicated/housing/{serviceName}/bandwidth
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const data = (await client.httpGet(`/dedicated/housing/${serviceName}/bandwidth`)) as unknown as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
