import type {
	IDataObject,
	IExecuteFunctions,
	INodeProperties,
	INodeExecutionData,
} from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';

export function description(): INodeProperties[] {
	return [];
}

/**
 * List of zone available for an IP load balancing
 *
 * HTTP method: GET
 * Endpoint: /ipLoadbalancing/availableZones
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/ipLoadbalancing' + '/' + 'availableZones')) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
