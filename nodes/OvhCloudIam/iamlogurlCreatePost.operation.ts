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
 * Executes the Post Generate a temporary URL to retrieve logs operation.
 *
 * HTTP method: POST
 * Endpoint: /iam/log/url
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	void _itemIndex;

	const body: IDataObject = {};

	const client = new ApiClient(this);
	const data = (await client.httpPost('/iam/log/url', body)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
