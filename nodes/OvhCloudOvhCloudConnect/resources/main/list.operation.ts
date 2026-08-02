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
 * List the available OvhCloud Connect services.
 *
 * HTTP method: GET
 * Endpoint: /ovhCloudConnect
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);

	const data = (await client.httpGet(`/ovhCloudConnect`)) as unknown[];
	const items = data.map((item) =>
		typeof item === 'string' ? { serviceName: item } : (item as IDataObject),
	) as IDataObject[];
	return this.helpers.returnJsonArray(items);
}
