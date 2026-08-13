import type {
    IDataObject,
    IDisplayOptions,
    IExecuteFunctions,
    INodeExecutionData,
    INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
    return [
            {
                displayName: 'Commercial Range',
                name: 'commercialRange',
                type: 'options',
                options: [{ name: 'Any', value: '' }],
                default: '',
                required: true,
                description: 'The commercialRange',
                displayOptions,
            }
    ];
}

/**
 * Get price of anti-DDos Pro option
 *
 * HTTP method: GET
 * Endpoint: /price/dedicated/server/antiDDoSPro/{commercialRange}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
    const client = getClient(this);
    const commercialRange = this.getNodeParameter('commercialRange', _itemIndex ?? 0) as string;
    const data = (await client.httpGet(`/price/dedicated/server/antiDDoSPro/${commercialRange}`)) as IDataObject;
    return this.helpers.returnJsonArray([data]);
}
