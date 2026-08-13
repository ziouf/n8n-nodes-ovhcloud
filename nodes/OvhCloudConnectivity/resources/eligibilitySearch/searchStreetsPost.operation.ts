import type {
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
	IDisplayOptions,
	IDataObject,
} from 'n8n-workflow';
import { getClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'INSEE Code',
			name: 'inseeCode',
			type: 'string',
			default: '',
			required: true,
			description: 'INSEE code of the city',
			displayOptions,
		},
	];
}

/**
 * Get all the streets associated with a city INSEE code.
 *
 * HTTP method: POST
 * Endpoint: /connectivity/eligibility/search/streets
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const inseeCode = (this.getNodeParameter('inseeCode', _itemIndex ?? 0, '') as string) || '';

	const body: IDataObject = {};
	if (inseeCode) body.inseeCode = inseeCode;

	const data = (await client.httpPost(`/connectivity/eligibility/search/streets`, body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
