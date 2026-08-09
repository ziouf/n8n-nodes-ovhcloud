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
 * Executes the Get Nutanix Cart Service Option operation.
 *
 * HTTP method: GET
 * Endpoint: /order/cartServiceOption/nutanix
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);


	const qs: IDataObject = {};

	const data = (await client.httpGet(`/order/cartServiceOption/nutanix`, { qs: qs || {} })) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
