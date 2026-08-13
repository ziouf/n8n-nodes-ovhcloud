import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Country',
			name: 'country',
			type: 'string',
			default: '',
			required: true,
			description: 'Country code (e.g. FR, US)',
			displayOptions,
		},
	];
}

/**
 * Retrieve all available legal forms for a given country.
 *
 * HTTP method: GET
 * Endpoint: /newAccount/legalform
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const country = this.getNodeParameter('country', _itemIndex ?? 0) as string;

	const data = (await client.httpGet('/newAccount/legalform', { country })) as IDataObject[];
	return this.helpers.returnJsonArray(data);
}
