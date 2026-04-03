import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../transport/ApiClient';

/**
 * @brief Get Product operation for Products resource
 *
 * Retrieves detailed information for a specific product:
 * - HTTP GET request to `/products/{productName}` endpoint
 * - Product name parameter is required
 * - Returns product details
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the Get Product operation
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Product Name',
			name: 'productName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the product',
			displayOptions,
		},
	];
}

/**
 * Executes the Get Product operation.
 *
 * Retrieves detailed information for a specific product.
 *
 * HTTP method: GET
 * Endpoint: /products/{productName}
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing product details
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const productName = this.getNodeParameter('productName', 0) as string;
	const data = (await client.httpGet(`/products/${productName}`)) as IDataObject;
	return [{ json: data }];
}
