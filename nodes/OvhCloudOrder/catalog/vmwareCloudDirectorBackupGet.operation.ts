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
            default: 'vmwareCloudDirectorBackup',
            description: 'The catalog product',
            displayOptions,
        },
    ];
}

/**
 * Executes the Get Catalog Public vmwareCloudDirectorBackup operation.
 *
 * HTTP method: GET
 * Endpoint: /order/catalog/public/vmwareCloudDirectorBackup
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
    const client = new ApiClient(this);
    const product = this.getNodeParameter('product', itemIndex) as string;

    const data = (await client.httpGet(`/order/catalog/public/${product}`)) as INodeExecutionData;
    return this.helpers.returnJsonArray([data]);
}
