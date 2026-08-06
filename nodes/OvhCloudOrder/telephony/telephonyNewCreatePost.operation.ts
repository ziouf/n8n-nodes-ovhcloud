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
 * Executes the Create operation.
 *
 * HTTP method: POST
 * Endpoint: /order/telephony/new
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const body: IDataObject = {};

	void itemIndex;
	const client = new ApiClient(this);

	const data = (await client.httpPost('/order/telephony/new', body)) as IDataObject[];
	return this.helpers.returnJsonArray(data);
}
