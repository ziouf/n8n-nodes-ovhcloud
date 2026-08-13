import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Geolocalizations',
			name: 'geolocalizations',
			type: 'string',
			default: '',
			description: 'Filter only extensions related to this list of geolocalization places (comma-separated). Default to empty.',
			displayOptions,
		},
		{
			displayName: 'Order By',
			name: 'orderBy',
			type: 'options',
			default: 'alphabetical',
			options: [
				{ name: 'Alphabetical', value: 'alphabetical' },
				{ name: 'Trending', value: 'trending' },
			],
			description: 'Order results by name (alphabetical) or trending importance (trending). Default to alphabetical.',
			displayOptions,
		},
		{
			displayName: 'Ovh Subsidiary',
			name: 'ovhSubsidiary',
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
			description: 'OVHcloud subsidiary targeted. Useful only when orderBy is equal to trending. Default to FR.',
			displayOptions,
		},
		{
			displayName: 'Thematics',
			name: 'thematics',
			type: 'string',
			default: '',
			description: 'Filter only extensions related to this list of thematics (comma-separated). Default to empty.',
			displayOptions,
		},
	];
}

/**
 * Executes the List all extensions operation.
 *
 * HTTP method: GET
 * Endpoint: /domain/extensions
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);

	const qs: IDataObject = {};
		const geolocalizations = this.getNodeParameter('geolocalizations', _itemIndex, '') as string;
		if (geolocalizations !== '' && geolocalizations !== undefined) qs['geolocalizations'] = geolocalizations;
		const orderBy = this.getNodeParameter('orderBy', _itemIndex, '') as string;
		if (orderBy !== '' && orderBy !== undefined) qs['orderBy'] = orderBy;
		const ovhSubsidiary = this.getNodeParameter('ovhSubsidiary', _itemIndex, '') as string;
		if (ovhSubsidiary !== '' && ovhSubsidiary !== undefined) qs['ovhSubsidiary'] = ovhSubsidiary;
		const thematics = this.getNodeParameter('thematics', _itemIndex, '') as string;
		if (thematics !== '' && thematics !== undefined) qs['thematics'] = thematics;

	const data = (await client.httpGet(`/domain/extensions`, qs)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
