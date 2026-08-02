import type {
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
	IDataObject,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

export function description(): INodeProperties[] {
	return [];
}

/**
 * List hardware that can be linked to a service.
 *
 * HTTP method: GET
 * Endpoint: /overTheBox/hardware/available
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/overTheBox/hardware/available')) as unknown[];
	const items = data.map((item) =>
		typeof item === 'string' ? { hardwareName: item } : (item as IDataObject),
	) as IDataObject[];
	return this.helpers.returnJsonArray(items);
}
