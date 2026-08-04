import type {
	IDataObject,
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
 * Executes the Get Retrieve data referential for /notification endpoints operation.
 *
 * HTTP method: GET
 * Endpoint: /notification/reference
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	void itemIndex;


	const client = new ApiClient(this);
	const data = (await client.httpGet('/notification/reference')) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
