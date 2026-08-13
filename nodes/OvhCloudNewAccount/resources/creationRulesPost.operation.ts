import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';
import { newAccountStringFieldProperties } from './newAccountCommon';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return newAccountStringFieldProperties(displayOptions, { includeAction: true });
}

/**
 * Retrieve creation rules for identifier fields.
 *
 * HTTP method: GET
 * Endpoint: /newAccount/creationRules
 *
 * NOTE: the file is named `creationRulesPost` for historical reasons but the
 * spec defines a GET-only endpoint. The query parameters follow the spec:
 * country, legalform, ovhCompany and ovhSubsidiary (all required).
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);

	const qs: IDataObject = {
		country: this.getNodeParameter('country', _itemIndex ?? 0) as string,
		legalform: this.getNodeParameter('legalform', _itemIndex ?? 0) as string,
		ovhCompany: this.getNodeParameter('ovhCompany', _itemIndex ?? 0) as string,
		ovhSubsidiary: this.getNodeParameter('ovhSubsidiary', _itemIndex ?? 0) as string,
	};

	const data = (await client.httpGet('/newAccount/creationRules', qs)) as IDataObject[];
	return this.helpers.returnJsonArray(data);
}
