import type { IDataObject, IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';

/**
 * List available datacenters for VPS
 *
 * HTTP method: GET
 * Endpoint: /vps/datacenter
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpGet(`/vps/datacenter`)) as IDataObject;
	return this.helpers.returnJsonArray([{ ...data }]);
}
