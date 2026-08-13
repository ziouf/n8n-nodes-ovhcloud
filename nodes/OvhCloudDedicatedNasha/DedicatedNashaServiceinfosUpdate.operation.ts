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
 * Update service information
 *
 * HTTP method: PUT
 * Endpoint: /dedicated/nasha/{serviceName}/serviceInfos
 */
export async function execute(this: IExecuteFunctions,
	_itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex, { extractValue: true }) as string;
	const client = getClient(this);
	const data = (await client.httpPut('/dedicated/nasha/' + encodeURIComponent(serviceName) + '/serviceInfos')) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
