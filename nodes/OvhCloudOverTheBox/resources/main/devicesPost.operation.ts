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
 * Get the list of devices connected from the same IP address.
 *
 * HTTP method: POST
 * Endpoint: /overTheBox/devices
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const data = (await client.httpPost('/overTheBox/devices')) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
