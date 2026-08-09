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
                displayName: 'Firewall Model',
                name: 'firewallModel',
                type: 'options',
                options: [{ name: 'Any', value: '' }],
                default: '',
                required: true,
                description: 'The firewallModel',
                displayOptions,
            }
    ];
}

/**
 * Get price of available firewall models
 *
 * HTTP method: GET
 * Endpoint: /price/dedicated/server/firewall/{firewallModel}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
    const client = new ApiClient(this);
    const firewallModel = this.getNodeParameter('firewallModel', _itemIndex ?? 0) as string;
    const data = (await client.httpGet(`/price/dedicated/server/firewall/${firewallModel}`)) as IDataObject;
    return this.helpers.returnJsonArray([data]);
}
