import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * @brief Get available offer operation for Web Hosting
 *
 * HTTP GET request to `/hosting/web/availableOffer` endpoint.
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the operation
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [		{
			displayName: 'Domain',
			name: 'domain',
			type: 'string',
			default: '',
			required: true,
			description: 'Domain you want to add or upgrade a hosting',
			displayOptions,
		},
	];
}

/**
 * Executes the Get available offer operation.
 *
 * HTTP method: GET
 * Endpoint: /hosting/web/availableOffer
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const domain = this.getNodeParameter('domain', 0) as string;
	const data = (await client.httpGet(`/hosting/web/availableOffer`, { qs: { domain } })) as IDataObject;
	return this.helpers.returnJsonArray(data as unknown as IDataObject[]);
}
