import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(): INodeProperties[] {
	return [

	];
}

/**
 * Get raw datacenter availabilities
 *
 * HTTP method: GET
 * Endpoint: /dedicated/server/datacenter/availabilities/raw
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);


	const data = (await client.httpGet(
		`/dedicated/server/datacenter/availabilities/raw`,
	)) as IDataObject;
	const inputData = this.getInputData()[_itemIndex];
	return this.helpers.returnJsonArray([{ ...inputData.json, ...data }]);
}
