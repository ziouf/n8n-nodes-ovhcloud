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
	return [];
}

/**
 * Executes the Post Reseller Panel Generate Password operation.
 *
 * HTTP method: POST
 * Endpoint: /telephony/resellerPanel/generatePassword
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	void _itemIndex;

	const client = new ApiClient(this);
	const data = (await client.httpPost('/telephony/resellerPanel/generatePassword')) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
