import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Country',
			name: 'country',
			type: 'options',
			default: 'CZ',
			options: [
				{ name: 'CZ', value: 'CZ' },
				{ name: 'DE', value: 'DE' },
				{ name: 'ES', value: 'ES' },
				{ name: 'EU', value: 'EU' },
				{ name: 'FI', value: 'FI' },
				{ name: 'FR', value: 'FR' },
				{ name: 'GB', value: 'GB' },
				{ name: 'IE', value: 'IE' },
				{ name: 'IT', value: 'IT' },
				{ name: 'LT', value: 'LT' },
				{ name: 'MA', value: 'MA' },
				{ name: 'NL', value: 'NL' },
				{ name: 'PL', value: 'PL' },
				{ name: 'PT', value: 'PT' },
				{ name: 'SN', value: 'SN' },
				{ name: 'TN', value: 'TN' },
			],
			description: 'Ovh subsidiary targeted',
			displayOptions,
		},
	];
}

/**
 * Executes the List all the extensions for a specific country operation.
 *
 * HTTP method: GET
 * Endpoint: /domain/data/extension
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);

	const qs: IDataObject = {};
		const country = this.getNodeParameter('country', _itemIndex, '') as string;
		if (country !== '' && country !== undefined) qs['country'] = country;

	const data = (await client.httpGet(`/domain/data/extension`, qs)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
