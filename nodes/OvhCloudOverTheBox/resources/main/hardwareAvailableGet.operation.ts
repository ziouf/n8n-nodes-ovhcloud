import type {
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
	IDataObject,
} from 'n8n-workflow';
import { getClient } from '../../../../shared/transport/ApiClient';

export function description(): INodeProperties[] {
	return [];
}

/**
 * List hardware that can be linked to a service.
 *
 * HTTP method: GET
 * Endpoint: /overTheBox/hardware/available
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const data = (await client.httpGet('/overTheBox/hardware/available')) as unknown[];
	const items = data.map((item) =>
		typeof item === 'string' ? { hardwareName: item } : (item as IDataObject),
	) as IDataObject[];
	return this.helpers.returnJsonArray(items);
}
