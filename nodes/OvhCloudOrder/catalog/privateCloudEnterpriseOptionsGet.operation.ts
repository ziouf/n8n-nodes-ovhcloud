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
            default: 'privateCloudEnterprise',
            description: 'The catalog product',
            displayOptions,
        },
    ];
}

/**
 * Executes the Get Catalog Public privateCloudEnterprise Options operation.
 *
 * HTTP method: GET
 * Endpoint: /order/catalog/public/privateCloudEnterprise/options
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
    const client = new ApiClient(this);
    const product = this.getNodeParameter('product', 0) as string;

    const data = (await client.httpGet(`/order/catalog/public/${product}/options`)) as unknown[];

    if (!Array.isArray(data)) {
        return this.helpers.returnJsonArray([data]);
    }

    return this.helpers.returnJsonArray(data.map((item) => item as INodeExecutionData));
}
