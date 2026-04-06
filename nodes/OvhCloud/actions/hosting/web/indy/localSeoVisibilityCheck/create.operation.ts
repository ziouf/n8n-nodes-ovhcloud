import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../transport/ApiClient';

/**
 * @brief Check visibility of a location operation for Web Hosting
 *
 * HTTP POST request to `/hosting/web/localSeo/visibilityCheck` endpoint.
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the operation
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [		{
			displayName: 'Country',
			name: 'country',
			type: 'string',
			default: '',
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
			displayName: 'Zip',
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
 * Executes the Check visibility of a location operation.
 *
 * HTTP method: POST
 * Endpoint: /hosting/web/localSeo/visibilityCheck
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const country = this.getNodeParameter('country', 0) as string;
	const name = this.getNodeParameter('name', 0) as string;
	const street = this.getNodeParameter('street', 0) as string;
	const zip = this.getNodeParameter('zip', 0) as string;
	const data = (await client.httpPost(`/hosting/web/localSeo/visibilityCheck`, { body: { country: country, name: name, street: street, zip: zip } })) as IDataObject;
	return [{ json: data }];
}
