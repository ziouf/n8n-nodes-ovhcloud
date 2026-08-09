import type {
	IExecuteFunctions,
    IDisplayOptions,
    INodeExecutionData,
    INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
    return [
        {
            displayName: 'Product',
            name: 'product',
            type: 'string',
            default: 'sslGateway',
            description: 'The catalog product',
            displayOptions,
        },
    ];
}

/**
 * Executes the Get Catalog Public sslGateway operation.
 *
 * HTTP method: GET
 * Endpoint: /order/catalog/public/sslGateway
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
    const client = new ApiClient(this);
    const product = this.getNodeParameter('product', _itemIndex) as string;

    const data = (await client.httpGet(`/order/catalog/public/${product}`)) as INodeExecutionData;
    return this.helpers.returnJsonArray([data]);
}
