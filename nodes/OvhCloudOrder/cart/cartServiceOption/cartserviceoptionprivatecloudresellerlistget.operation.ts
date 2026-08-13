import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../../shared/transport/ApiClient';

	export function description(_displayOptions: IDisplayOptions): INodeProperties[] {
	return [

	];
}

/**
 * Executes the Get Privatecloudreseller Cart Service Option operation.
 *
 * HTTP method: GET
 * Endpoint: /order/cartServiceOption/privateCloudReseller
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);


	const qs: IDataObject = {};

	const data = (await client.httpGet(`/order/cartServiceOption/privateCloudReseller`, { qs: qs || {} })) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
