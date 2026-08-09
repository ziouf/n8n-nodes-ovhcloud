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
                displayName: 'Offers Name',
                name: 'offersName',
                type: 'options',
                options: [{ name: 'Any', value: '' }],
                default: '',
                required: true,
                description: 'The offersName',
                displayOptions,
            }
    ];
}

/**
 * Get the price of xdsl offers
 *
 * HTTP method: GET
 * Endpoint: /price/xdsl/offers/{offersName}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
    const client = new ApiClient(this);
    const offersName = this.getNodeParameter('offersName', _itemIndex ?? 0) as string;
    const data = (await client.httpGet(`/price/xdsl/offers/${offersName}`)) as IDataObject;
    return this.helpers.returnJsonArray([data]);
}
