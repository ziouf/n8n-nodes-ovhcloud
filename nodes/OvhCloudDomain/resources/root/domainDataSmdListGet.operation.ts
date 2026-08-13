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
 * Executes the List all SMD files operation.
 *
 * HTTP method: GET
 * Endpoint: /domain/data/smd
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);

	const data = (await client.httpGet(`/domain/data/smd`)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
