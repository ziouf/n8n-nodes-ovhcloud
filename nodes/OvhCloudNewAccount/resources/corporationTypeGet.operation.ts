import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

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
 * Retrieve all available corporation types for a given country.
 *
 * HTTP method: GET
 * Endpoint: /newAccount/corporationType
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const country = this.getNodeParameter('country', 0) as string;

	const data = (await client.httpGet('/newAccount/corporationType', { country })) as IDataObject[];
	return this.helpers.returnJsonArray(data);
}
