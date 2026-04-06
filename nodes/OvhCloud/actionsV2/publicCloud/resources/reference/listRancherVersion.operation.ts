import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * List Public Cloud reference Rancher versions.
 *
 * HTTP method: GET
 * Endpoint: /v2/publicCloud/reference/rancher/version
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

/**
 * Executes the List Public Cloud Reference Rancher Versions operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/v2/publicCloud/reference/rancher/version')) as IDataObject[];
	return this.helpers.returnJsonArray(data);
}
