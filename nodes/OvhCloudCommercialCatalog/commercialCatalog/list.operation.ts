import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

/**
 * @brief List Commercial Catalog operation for V2 API
 *
 * Retrieves all commercial catalog offers:
 * - HTTP GET request to `/v2/commercialCatalog` endpoint
 * - No additional parameters required
 * - Returns list of commercial catalog offers
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Empty array (no additional UI properties needed)
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

/**
 * Executes the List Commercial Catalog operation.
 *
 * Retrieves all commercial catalog offers.
 *
 * HTTP method: GET
 * Endpoint: /v2/commercialCatalog
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing commercial catalog offers
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/v2/commercialCatalog')) as IDataObject[];
	return data.map((item) => ({ json: item }));
}
