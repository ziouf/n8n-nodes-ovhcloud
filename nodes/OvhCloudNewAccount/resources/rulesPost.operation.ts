import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';
import { buildNewAccountBody, newAccountStringFieldProperties } from './newAccountCommon';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return newAccountStringFieldProperties(displayOptions, { includeAction: true });
}

/**
 * Retrieve rules for creating or updating an identifier.
 *
 * HTTP method: POST
 * Endpoint: /newAccount/rules
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const body = buildNewAccountBody(this, { includeAction: true });

	const data = (await client.httpPost('/newAccount/rules', body)) as IDataObject[];
	return this.helpers.returnJsonArray(data);
}
