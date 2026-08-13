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
 * Executes the Get Upgrade Vpsadditionaldisk operation.
 *
 * HTTP method: GET
 * Endpoint: /order/upgrade/vpsAdditionalDisk
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);


	const qs: IDataObject = {};

	const data = (await client.httpGet(`/order/upgrade/vpsAdditionalDisk`, { qs: qs || {} })) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
