import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	void displayOptions;
	return [];
}

/**
 * Executes the Get ListCdnPops operation.
 *
 * HTTP method: GET
 * Endpoint: /cdn/dedicated/pops
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	void _itemIndex;

	const client = getClient(this);
	const data = (await client.httpGet(`/cdn/dedicated/pops`)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
