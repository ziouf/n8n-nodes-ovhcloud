import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * @brief Get offer capabilities operation for Web Hosting
 *
 * HTTP GET request to `/hosting/web/offerCapabilities` endpoint.
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the operation
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [		{
			displayName: 'Offer',
			name: 'offer',
			type: 'string',
			default: '',
			required: true,
			description: 'Describe offer capabilities',
			displayOptions,
		},
	];
}

/**
 * Executes the Get offer capabilities operation.
 *
 * HTTP method: GET
 * Endpoint: /hosting/web/offerCapabilities
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const offer = this.getNodeParameter('offer', 0) as string;
	const data = (await client.httpGet(`/hosting/web/offerCapabilities`, { qs: { offer } })) as IDataObject;
	return [{ json: data }];
}
