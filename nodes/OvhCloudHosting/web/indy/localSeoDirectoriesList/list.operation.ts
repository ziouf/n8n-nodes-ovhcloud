import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../shared/transport/ApiClient';

/**
 * @brief Get list of directories associated to a local SEO offer and a country operation for Web Hosting
 *
 * HTTP GET request to `/hosting/web/localSeo/directoriesList` endpoint.
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
			displayName: 'Offer',
			name: 'offer',
			type: 'string',
			default: '',
			required: true,
			description: 'Local SEO offer',
			displayOptions,
		},
	];
}

/**
 * Executes the Get list of directories associated to a local SEO offer and a country operation.
 *
 * HTTP method: GET
 * Endpoint: /hosting/web/localSeo/directoriesList
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const country = this.getNodeParameter('country', 0) as string;
	const offer = this.getNodeParameter('offer', 0) as string;
	const data = (await client.httpGet(`/hosting/web/localSeo/directoriesList`, { qs: { country, offer } })) as IDataObject;
	return [{ json: data }];
}
