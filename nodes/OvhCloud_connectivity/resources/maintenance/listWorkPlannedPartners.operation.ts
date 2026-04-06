import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * List planned maintenance work (partners).
 *
 * HTTP method: GET
 * Endpoint: /connectivity/maintenance/workPlanned/partners
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

/**
 * Executes the List Work Planned Partners operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpGet(
		'/connectivity/maintenance/workPlanned/partners',
	)) as IDataObject[];
	return data.map((item) => ({ json: item }));
}
