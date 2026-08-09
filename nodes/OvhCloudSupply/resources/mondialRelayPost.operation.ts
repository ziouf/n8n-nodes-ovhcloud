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
			placeholder: 'fr',
			description: 'ISO country code (e.g. fr, de, es)',
			displayOptions,
		},
		{
			displayName: 'Address',
			name: 'address',
			type: 'string',
			default: '',
			description: 'Address used to find the nearest MondialRelay points',
			displayOptions,
		},
		{
			displayName: 'City',
			name: 'city',
			type: 'string',
			default: '',
			description: 'City used to find the nearest MondialRelay points',
			displayOptions,
		},
		{
			displayName: 'Zip Code',
			name: 'zipcode',
			type: 'string',
			default: '',
			description: 'Zip Code used to find the nearest MondialRelay points',
			displayOptions,
		},
	];
}

/**
 * Find the 10 nearest MondialRelay points from address or city.
 *
 * HTTP method: POST
 * Endpoint: /supply/mondialRelay
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);

	const body: IDataObject = { country: this.getNodeParameter('country', _itemIndex ?? 0) as string };

	const address = (this.getNodeParameter('address', _itemIndex ?? 0, '') as string) || '';
	if (address) body.address = address;

	const city = (this.getNodeParameter('city', _itemIndex ?? 0, '') as string) || '';
	if (city) body.city = city;

	const zipcode = (this.getNodeParameter('zipcode', _itemIndex ?? 0, '') as string) || '';
	if (zipcode) body.zipcode = zipcode;

	const data = (await client.httpPost('/supply/mondialRelay', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
