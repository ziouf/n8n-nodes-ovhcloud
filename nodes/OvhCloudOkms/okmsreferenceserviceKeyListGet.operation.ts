import type {

	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';

export function description(_displayOptions: IDisplayOptions): INodeProperties[] {
	void _displayOptions;
	return [

	];
}

/**
 * Executes the Get Get service key type, size, curve and operations combination operation.
 *
 * HTTP method: GET
 * Endpoint: /okms/reference/serviceKey
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	void _itemIndex;


	const client = new ApiClient(this);
	const data = (await client.httpGet('/okms/reference/serviceKey')) as unknown[];


	if (!Array.isArray(data)) {
		return this.helpers.returnJsonArray([data]);
	}

	return this.helpers.returnJsonArray(data.map((item) => item as INodeExecutionData));
}
