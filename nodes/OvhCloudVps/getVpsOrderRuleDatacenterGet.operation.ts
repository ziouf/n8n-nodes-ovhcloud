import type { IDataObject, IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';

/**
 * Get datacenter rules for VPS ordering
 *
 * HTTP method: GET
 * Endpoint: /vps/order/rule/datacenter
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpGet(`/vps/order/rule/datacenter`)) as IDataObject;
	return this.helpers.returnJsonArray([{ ...data }]);
}
