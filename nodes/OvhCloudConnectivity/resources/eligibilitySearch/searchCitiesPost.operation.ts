import type {
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
	IDisplayOptions,
	IDataObject,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Zip Code',
			name: 'zipCode',
			type: 'string',
			default: '',
			required: true,
			description: 'Postal code of the city',
			displayOptions,
		},
	];
}

/**
 * Get all the cities associated with a postal code.
 *
 * HTTP method: POST
 * Endpoint: /connectivity/eligibility/search/cities
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const zipCode = (this.getNodeParameter('zipCode', 0, '') as string) || '';

	const body: IDataObject = {};
	if (zipCode) body.zipCode = zipCode;

	const data = (await client.httpPost(`/connectivity/eligibility/search/cities`, body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
