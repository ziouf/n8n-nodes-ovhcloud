import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';

export function description(_displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		
	];
}

/**
 * Executes the Create operation.
 *
 * HTTP method: POST
 * Endpoint: /order/telephony/spare/new
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const body: IDataObject = {};

	void _itemIndex;
	const client = getClient(this);

	const data = (await client.httpPost('/order/telephony/spare/new', body)) as IDataObject[];
	return this.helpers.returnJsonArray(data);
}
