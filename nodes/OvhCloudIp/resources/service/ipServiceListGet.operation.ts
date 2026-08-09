import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	void displayOptions;
	return [
	];
}

/**
 * Executes the Get List IP Services operation.
 *
 * HTTP method: GET
 * Endpoint: /ip/service
 */

export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	void _itemIndex;

	const client = new ApiClient(this);
	const data = (await client.httpGet(`/ip/service`)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
