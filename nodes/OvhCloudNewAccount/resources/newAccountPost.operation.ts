import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';
import { buildNewAccountBody, newAccountStringFieldProperties } from './newAccountCommon';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return newAccountStringFieldProperties(displayOptions, {
		requiredFields: ['country', 'email', 'legalform', 'ovhCompany', 'ovhSubsidiary'],
	});
}

/**
 * Create a new OVHcloud identifier (nichandle).
 *
 * HTTP method: POST
 * Endpoint: /newAccount
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const body = buildNewAccountBody(this, _itemIndex ?? 0);

	const data = (await client.httpPost('/newAccount', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
