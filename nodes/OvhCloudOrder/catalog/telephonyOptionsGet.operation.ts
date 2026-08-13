import type {
	IExecuteFunctions,
    IDisplayOptions,
    INodeExecutionData,
    INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
    return [
        {
            displayName: 'Product',
            name: 'product',
            type: 'string',
            default: 'telephony',
            description: 'The catalog product',
            displayOptions,
        },
    ];
}

/**
 * Executes the Get Catalog Public telephony Options operation.
 *
 * HTTP method: GET
 * Endpoint: /order/catalog/public/telephony/options
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
    const client = getClient(this);
    const product = this.getNodeParameter('product', _itemIndex) as string;

    const data = (await client.httpGet(`/order/catalog/public/${product}/options`)) as unknown[];

    if (!Array.isArray(data)) {
        return this.helpers.returnJsonArray([data]);
    }

    return this.helpers.returnJsonArray(data.map((item) => item as INodeExecutionData));
}
