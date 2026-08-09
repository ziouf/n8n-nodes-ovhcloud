import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

export function description(_displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

/**
 * Executes the List all contacts operation.
 *
 * HTTP method: GET
 * Endpoint: /domain/contact
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);

	const data = (await client.httpGet(`/domain/contact`)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
