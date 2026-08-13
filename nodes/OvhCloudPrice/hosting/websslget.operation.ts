import type {
    IDataObject,
    IDisplayOptions,
    IExecuteFunctions,
    INodeExecutionData,
    INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
    return [
            {
                displayName: 'Ssl Name',
                name: 'sslName',
                type: 'options',
                options: [{ name: 'Any', value: '' }],
                default: '',
                required: true,
                description: 'The sslName',
                displayOptions,
            }
    ];
}

/**
 * Get the price for hosted ssl option
 *
 * HTTP method: GET
 * Endpoint: /price/hosting/web/ssl/{sslName}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
    const client = getClient(this);
    const sslName = this.getNodeParameter('sslName', _itemIndex ?? 0) as string;
    const data = (await client.httpGet(`/price/hosting/web/ssl/${sslName}`)) as IDataObject;
    return this.helpers.returnJsonArray([data]);
}
