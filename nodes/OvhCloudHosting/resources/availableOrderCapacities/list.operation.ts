/**
 * @brief List Available Order Capacities operation for private database
 *
 * HTTP GET request to `/hosting/privateDatabase/availableOrderCapacities` endpoint.
 */
import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpGet(
		'/hosting/privateDatabase/availableOrderCapacities',
	)) as IDataObject[];
	return data.map((item) => ({ json: item }));
}
