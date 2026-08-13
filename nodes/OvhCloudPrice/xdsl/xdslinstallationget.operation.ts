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
                displayName: 'Offer',
                name: 'offer',
                type: 'options',
                options: [{ name: 'Any', value: '' }],
                default: '',
                required: true,
                displayOptions,
            }
    ];
}

/**
 * Get the price of options installation fee
 *
 * HTTP method: GET
 * Endpoint: /price/xdsl/installation/{offer}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
    const client = getClient(this);
    const offer = this.getNodeParameter('offer', _itemIndex ?? 0) as string;
    const data = (await client.httpGet(`/price/xdsl/installation/${offer}`)) as IDataObject;
    return this.helpers.returnJsonArray([data]);
}
