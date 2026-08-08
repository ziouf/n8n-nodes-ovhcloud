import type { IDataObject, IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';

/**
 * Get OS choices for VPS ordering
 *
 * HTTP method: GET
 * Endpoint: /vps/order/rule/osChoices
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpGet(`/vps/order/rule/osChoices`)) as IDataObject;
	return this.helpers.returnJsonArray([{ ...data }]);
}
