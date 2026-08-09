import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Country',
			name: 'country',
			type: 'string',
			default: 'FR',
			required: true,
			description: 'Country of the location',
			displayOptions,
		},
		{
			displayName: 'Offer',
			name: 'offer',
			type: 'string',
			default: 'normal',
			required: true,
			description: 'Local SEO offer',
			displayOptions,
		},
	];
}

/**
 * Get list of directories associated to a local SEO offer and a country
 *
 * HTTP method: GET
 * Endpoint: /hosting/web/localSeo/directoriesList
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const country = this.getNodeParameter('country', _itemIndex) as string;
	const offer = this.getNodeParameter('offer', _itemIndex) as string;
	const data = (await client.httpGet('/hosting/web/localSeo/directoriesList', {
		country,
		offer,
	})) as IDataObject;
	const inputData = this.getInputData()[_itemIndex];
	return this.helpers.returnJsonArray([{ ...inputData.json, ...data }]);
}
