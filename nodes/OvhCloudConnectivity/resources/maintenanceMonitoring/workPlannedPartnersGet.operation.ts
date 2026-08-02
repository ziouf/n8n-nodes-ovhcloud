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
 * List the planned works published by the operators, reserved for partners.
 *
 * HTTP method: GET
 * Endpoint: /connectivity/maintenance/workPlanned/partners
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);

	const data = (await client.httpGet(
		`/connectivity/maintenance/workPlanned/partners`,
	)) as unknown[];
	const items = data.map((item) =>
		typeof item === 'string' ? { id: item } : (item as IDataObject),
	) as IDataObject[];
	return this.helpers.returnJsonArray(items);
}
