import type {
    IDataObject,
    IDisplayOptions,
    IExecuteFunctions,
    INodeExecutionData,
    INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
    return [
            {
                displayName: 'Routed To',
                name: 'routedTo',
                type: 'options',
                options: [{ name: 'Any', value: '' }],
                default: '',
                required: true,
                description: 'The routedTo',
                displayOptions,
            }
    ];
}

/**
 * Get price of IPs
 *
 * HTTP method: GET
 * Endpoint: /price/dedicated/server/ip/{routedTo}
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
    const client = new ApiClient(this);
    const routedTo = this.getNodeParameter('routedTo', 0) as string;
    const data = (await client.httpGet(`/price/dedicated/server/ip/${routedTo}`)) as IDataObject;
    return this.helpers.returnJsonArray([data]);
}
