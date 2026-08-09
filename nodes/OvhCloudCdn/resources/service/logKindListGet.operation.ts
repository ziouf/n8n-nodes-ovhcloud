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
	return [];
}

/**
 * Executes the Get ListLogKinds operation.
 *
 * HTTP method: GET
 * Endpoint: /cdn/dedicated/log/kind
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	void _itemIndex;

	const client = new ApiClient(this);
	const data = (await client.httpGet(`/cdn/dedicated/log/kind`)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
