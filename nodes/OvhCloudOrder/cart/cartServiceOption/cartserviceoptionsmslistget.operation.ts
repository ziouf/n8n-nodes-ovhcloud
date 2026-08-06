import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
	export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [

	];
}

/**
 * Executes the Get Sms Cart Service Option operation.
 *
 * HTTP method: GET
 * Endpoint: /order/cartServiceOption/sms
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);


	const qs: IDataObject = {};

	const data = (await client.httpGet(`/order/cartServiceOption/sms`, { qs: qs || {} })) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
