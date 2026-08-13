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
			displayName: 'Latitude',
			name: 'latitude',
			type: 'string',
			default: '',
			required: true,
			description: 'Latitude of the position',
			displayOptions,
		},
		{
			displayName: 'Longitude',
			name: 'longitude',
			type: 'string',
			default: '',
			required: true,
			description: 'Longitude of the position',
			displayOptions,
		},
		{
			displayName: 'Distance',
			name: 'distance',
			type: 'number',
			default: 0,
			description: 'Search distance in meters, defaults to 10',
			displayOptions,
		},
	];
}

/**
 * Search for addresses near a geographic position.
 *
 * HTTP method: POST
 * Endpoint: /connectivity/eligibility/search/addresses
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const latitude = (this.getNodeParameter('latitude', _itemIndex ?? 0, '') as string) || '';
	const longitude = (this.getNodeParameter('longitude', _itemIndex ?? 0, '') as string) || '';
	const distance = (this.getNodeParameter('distance', _itemIndex ?? 0, 0) as number) ?? 0;

	const body: IDataObject = {};
	if (latitude) body.latitude = latitude;
	if (longitude) body.longitude = longitude;
	if (distance) body.distance = distance;

	const data = (await client.httpPost(`/connectivity/eligibility/search/addresses`, body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
