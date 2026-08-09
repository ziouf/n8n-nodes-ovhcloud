import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(_displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		
	];
}

/**
 * Executes the List operation.
 *
 * HTTP method: GET
 * Endpoint: /order/telephony/spare/new
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	void _itemIndex;
	const client = new ApiClient(this);

	const data = (await client.httpGet('/order/telephony/spare/new')) as IDataObject[];
	return this.helpers.returnJsonArray(data);
}
