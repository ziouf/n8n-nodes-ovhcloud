import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../../shared/transport/ApiClient';

export function description(_displayOptions: IDisplayOptions): INodeProperties[] {
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
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);

	const data = (await client.httpGet(`/domain/zone`)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
