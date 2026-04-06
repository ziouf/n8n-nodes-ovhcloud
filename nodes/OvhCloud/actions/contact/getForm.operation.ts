import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../transport/ApiClient';

/**
 * Get form characteristics operation for Contact resource.
 *
 * Retrieves the characteristics of the contact form:
 * - HTTP GET request to `/contact/form` endpoint
 * - No parameters required
 * - Returns FormCharacteristic[] describing available form fields
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

/**
 * Executes the Get Form Characteristics operation.
 *
 * Retrieves the characteristics of the contact form from the OVH API.
 *
 * HTTP method: GET
 * Endpoint: /contact/form
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing form characteristics
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/contact/form')) as IDataObject[];
	return this.helpers.returnJsonArray(data);
}
