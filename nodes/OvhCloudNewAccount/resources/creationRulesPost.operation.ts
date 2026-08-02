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
 * Retrieve creation rules for identifier fields.
 *
 * HTTP method: POST
 * Endpoint: /newAccount/creationRules
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const body = buildNewAccountBody(this, { includeAction: true });

	const data = (await client.httpPost('/newAccount/creationRules', body)) as IDataObject[];
	return this.helpers.returnJsonArray(data);
}
