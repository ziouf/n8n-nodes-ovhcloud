import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../../shared/transport/ApiClient';
import { serviceNameLocator } from '../../../../shared/nodes/locators';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			...serviceNameLocator({
				searchListMethod: 'getDomainNames',
				displayName: 'Service Name',
				description: 'The service name',
				placeholder: 'example.com',
			}),
			displayOptions,
		},
	];
}

/**
 * Executes the Get domain name information operation.
 *
 * HTTP method: GET
 * Endpoint: /domain/{serviceName}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
		const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;

	const data = (await client.httpGet(`/domain/${encodeURIComponent(serviceName)}`)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
