import type {
	IDataObject,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../shared/transport/ApiClient';
import { serviceNameLocator } from '../../shared/nodes/locators';

export function description(): INodeProperties[] {
	return [
		{
			...serviceNameLocator({
				searchListMethod: 'getDedicatedNashaServices',
				displayName: 'Servicename',
				description: 'The internal name of your storage',
			}),
		},
	];
}

/**
 * Return statistics about the nas
 *
 * HTTP method: GET
 * Endpoint: /dedicated/nasha/{serviceName}/use
 */
export async function execute(this: IExecuteFunctions,
	_itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex, { extractValue: true }) as string;
	const client = getClient(this);
	const qs: IDataObject = {};
			qs['type'] = this.getNodeParameter('type', _itemIndex, '') as string;
	const data = (await client.httpGet('/dedicated/nasha/' + encodeURIComponent(serviceName) + '/use', qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
