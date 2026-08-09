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
 * Executes the Get IP Campuses operation.
 *
 * HTTP method: GET
 * Endpoint: /ip/campus
 */

export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	void _itemIndex;

	const client = new ApiClient(this);
	const data = (await client.httpGet(`/ip/campus`)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
