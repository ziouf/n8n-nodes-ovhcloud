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
                displayName: 'Ip Range',
                name: 'ipRange',
                type: 'options',
                options: [{ name: 'Any', value: '' }],
                default: '',
                required: true,
                description: 'The ipRange',
                displayOptions,
            }
    ];
}

/**
 * Get the price of IPv4 options
 *
 * HTTP method: GET
 * Endpoint: /price/xdsl/options/ipv4/{ipRange}
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
    const client = new ApiClient(this);
    const ipRange = this.getNodeParameter('ipRange', 0) as string;
    const data = (await client.httpGet(`/price/xdsl/options/ipv4/${ipRange}`)) as IDataObject;
    return this.helpers.returnJsonArray([data]);
}
