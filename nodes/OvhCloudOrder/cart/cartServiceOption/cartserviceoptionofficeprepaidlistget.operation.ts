import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

	export function description(_displayOptions: IDisplayOptions): INodeProperties[] {
	return [

	];
}

/**
 * Executes the Get Officeprepaid Cart Service Option operation.
 *
 * HTTP method: GET
 * Endpoint: /order/cartServiceOption/officePrepaid
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);


	const qs: IDataObject = {};

	const data = (await client.httpGet(`/order/cartServiceOption/officePrepaid`, { qs: qs || {} })) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
