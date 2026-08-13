import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';

export function description(_displayOptions: IDisplayOptions): INodeProperties[] {
	void _displayOptions;
	return [
	];
}

/**
 * Executes the Get ListBillingAccounts operation.
 *
 * HTTP method: GET
 * Endpoint: /telephony
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	void _itemIndex;



	const client = getClient(this);
	const data = (await client.httpGet('/telephony')) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
