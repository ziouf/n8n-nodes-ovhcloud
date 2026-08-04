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
			displayName: 'Name',
			name: 'name',
			type: 'string',
			default: '',
			required: true,
			description: 'Name of the location',
			displayOptions,
		},
		{
			displayName: 'Street',
			name: 'street',
			type: 'string',
			default: '',
			required: true,
			description: 'Address line 1 of the location',
			displayOptions,
		},
		{
			displayName: 'Zip Code',
			name: 'zip',
			type: 'string',
			default: '',
			required: true,
			description: 'Zipcode of the location',
			displayOptions,
		},
	];
}

/**
 * Check visibility of a location
 *
 * HTTP method: POST
 * Endpoint: /hosting/web/localSeo/visibilityCheck
 */
export async function execute(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const country = this.getNodeParameter('country', itemIndex) as string;
	const name = this.getNodeParameter('name', itemIndex) as string;
	const street = this.getNodeParameter('street', itemIndex) as string;
	const zip = this.getNodeParameter('zip', itemIndex) as string;
	const data = (await client.httpPost('/hosting/web/localSeo/visibilityCheck', {
		country,
		name,
		street,
		zip,
	})) as IDataObject;
	const inputData = this.getInputData()[itemIndex];
	return this.helpers.returnJsonArray([{ ...inputData.json, ...data }]);
}
