import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [

	];
}

/**
 * Executes the Get ListStorages operation.
 *
 * HTTP method: GET
 * Endpoint: /storage
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {


	const client = new ApiClient(this);
	const data = (await client.httpGet('/storage')) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
