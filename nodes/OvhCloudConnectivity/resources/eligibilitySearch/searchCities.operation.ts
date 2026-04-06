import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Get localities for a zip code.
 *
 * HTTP method: POST
 * Endpoint: /connectivity/eligibility/search/cities
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Zip Code',
			name: 'zipCode',
			type: 'string',
			default: '',
			required: true,
			description: 'The zip code to search localities for',
			displayOptions,
		},
	];
}

/**
 * Executes the Search Cities operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const body: IDataObject = {
		zipCode: this.getNodeParameter('zipCode', 0) as string,
	};
	const data = (await client.httpPost('/connectivity/eligibility/search/cities', {
		body,
	})) as IDataObject[];
	return data.map((item) => ({ json: item }));
}
