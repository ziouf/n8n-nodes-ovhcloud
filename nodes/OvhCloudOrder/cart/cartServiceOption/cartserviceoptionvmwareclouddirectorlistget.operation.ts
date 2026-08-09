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
 * Executes the Get Vmwareclouddirector Cart Service Option operation.
 *
 * HTTP method: GET
 * Endpoint: /order/cartServiceOption/vmwareCloudDirector
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);


	const qs: IDataObject = {};

	const data = (await client.httpGet(`/order/cartServiceOption/vmwareCloudDirector`, { qs: qs || {} })) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
