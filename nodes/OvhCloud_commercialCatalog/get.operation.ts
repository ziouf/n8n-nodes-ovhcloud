import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';

/**
 * @brief Get Commercial Catalog Offer operation for V2 API
 *
 * Retrieves detailed information for a specific commercial catalog offer:
 * - HTTP GET request to `/v2/commercialCatalog/{offerId}` endpoint
 * - Offer ID parameter is required
 * - Returns offer details
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the Get Commercial Catalog Offer operation
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Offer Name/ID',
			name: 'offerId',
			type: 'string',
			default: '',
			required: true,
			description: 'The name or ID of the commercial catalog offer',
			displayOptions,
		},
	];
}

/**
 * Executes the Get Commercial Catalog Offer operation.
 *
 * Retrieves detailed information for a specific commercial catalog offer.
 *
 * HTTP method: GET
 * Endpoint: /v2/commercialCatalog/{offerId}
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing offer details
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const offerId = this.getNodeParameter('offerId', 0) as string;
	const data = (await client.httpGet(`/v2/commercialCatalog/${offerId}`)) as IDataObject;
	return [{ json: data }];
}
