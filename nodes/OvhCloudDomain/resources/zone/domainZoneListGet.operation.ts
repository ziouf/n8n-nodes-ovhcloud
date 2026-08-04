import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

/**
 * Executes the List dnsZone services operation.
 *
 * HTTP method: GET
 * Endpoint: /domain/zone
 */
export async function execute(
	this: IExecuteFunctions,
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);

	const data = (await client.httpGet(`/domain/zone`)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
