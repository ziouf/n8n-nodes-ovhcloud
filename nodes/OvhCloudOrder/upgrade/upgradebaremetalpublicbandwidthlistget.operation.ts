import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
	export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [

	];
}

/**
 * Executes the Get Upgrade Baremetal Public Bandwidth operation.
 *
 * HTTP method: GET
 * Endpoint: /order/upgrade/baremetalPublicBandwidth
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);


	const qs: IDataObject = {};

	const data = (await client.httpGet(`/order/upgrade/baremetalPublicBandwidth`, { qs: qs || {} })) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
