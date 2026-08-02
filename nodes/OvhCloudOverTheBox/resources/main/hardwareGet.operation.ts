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
 * List available OverTheBox hardware.
 *
 * HTTP method: GET
 * Endpoint: /overTheBox/hardware
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/overTheBox/hardware')) as unknown[];
	const items = data.map((item) =>
		typeof item === 'string' ? { hardwareName: item } : (item as IDataObject),
	) as IDataObject[];
	return this.helpers.returnJsonArray(items);
}
