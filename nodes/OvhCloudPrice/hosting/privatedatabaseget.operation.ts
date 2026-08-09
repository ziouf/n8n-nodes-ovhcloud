import type {
    IDataObject,
    IDisplayOptions,
    IExecuteFunctions,
    INodeExecutionData,
    INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
    return [
            {
                displayName: 'Private Database Name',
                name: 'privateDatabaseName',
                type: 'options',
                options: [{ name: 'Any', value: '' }],
                default: '',
                required: true,
                description: 'The privateDatabaseName',
                displayOptions,
            }
    ];
}

/**
 * Get the price for a private database
 *
 * HTTP method: GET
 * Endpoint: /price/hosting/privateDatabase/{privateDatabaseName}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
    const client = new ApiClient(this);
    const privateDatabaseName = this.getNodeParameter('privateDatabaseName', _itemIndex ?? 0) as string;
    const data = (await client.httpGet(`/price/hosting/privateDatabase/${privateDatabaseName}`)) as IDataObject;
    return this.helpers.returnJsonArray([data]);
}
