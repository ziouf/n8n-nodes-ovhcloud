import type {
	IDataObject,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

export function description(): INodeProperties[] {
	return [];
}

/**
 * Get information about the order of one Hadoop cluster.
 *
 * HTTP method: GET
 * Endpoint: /cluster/hadoop/orderInformations
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/cluster/hadoop/orderInformations')) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
