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
 * Executes the Get Upgrade Bandwidth Vrack operation.
 *
 * HTTP method: GET
 * Endpoint: /order/upgrade/bandwidthVrack
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);


	const qs: IDataObject = {};

	const data = (await client.httpGet(`/order/upgrade/bandwidthVrack`, { qs: qs || {} })) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
