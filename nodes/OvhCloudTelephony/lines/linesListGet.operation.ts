import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(_displayOptions: IDisplayOptions): INodeProperties[] {
	void _displayOptions;
	return [
	];
}

/**
 * Executes the Get ListLines operation.
 *
 * HTTP method: GET
 * Endpoint: /telephony/lines
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	void _itemIndex;



	const client = new ApiClient(this);
	const data = (await client.httpGet('/telephony/lines')) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
