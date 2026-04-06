import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Search nearby addresses by GPS coordinates.
 *
 * HTTP method: POST
 * Endpoint: /connectivity/eligibility/search/addresses
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Latitude',
			name: 'latitude',
			type: 'string',
			default: '',
			required: true,
			description: 'The latitude coordinate',
			displayOptions,
		},
		{
			displayName: 'Longitude',
			name: 'longitude',
			type: 'string',
			default: '',
			required: true,
			description: 'The longitude coordinate',
			displayOptions,
		},
		{
			displayName: 'Distance',
			name: 'distance',
			type: 'number',
			default: 10,
			description: 'Search radius in meters',
			displayOptions,
		},
	];
}

/**
 * Executes the Search Addresses operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const body: IDataObject = {
		latitude: this.getNodeParameter('latitude', 0) as string,
		longitude: this.getNodeParameter('longitude', 0) as string,
		distance: this.getNodeParameter('distance', 0, 10) as number,
	};
	const data = (await client.httpPost('/connectivity/eligibility/search/addresses', {
		body,
	})) as IDataObject[];
	return data.map((item) => ({ json: item }));
}
