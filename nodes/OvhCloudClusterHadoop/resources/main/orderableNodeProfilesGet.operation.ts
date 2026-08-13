import type {
	IDataObject,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../../shared/transport/ApiClient';

export function description(): INodeProperties[] {
	return [];
}

/**
 * Get the orderable node profiles and their characteristics.
 *
 * HTTP method: GET
 * Endpoint: /cluster/hadoop/orderableNodeProfiles
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const data = (await client.httpGet('/cluster/hadoop/orderableNodeProfiles')) as unknown[];
	const items = data.map((item) =>
		typeof item === 'string' ? { nodeProfile: item } : (item as IDataObject),
	) as IDataObject[];
	return this.helpers.returnJsonArray(items);
}
