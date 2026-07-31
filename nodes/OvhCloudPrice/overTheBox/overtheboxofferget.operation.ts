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
                displayName: 'Offer Name',
                name: 'offerName',
                type: 'options',
                options: [{ name: 'Any', value: '' }],
                default: '',
                required: true,
                description: 'The offerName',
                displayOptions,
            }
    ];
}

/**
 * Get the price of overTheBox offers
 *
 * HTTP method: GET
 * Endpoint: /price/overTheBox/offer/{offerName}
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
    const client = new ApiClient(this);
    const offerName = this.getNodeParameter('offerName', 0) as string;
    const data = (await client.httpGet(`/price/overTheBox/offer/${offerName}`)) as IDataObject;
    return this.helpers.returnJsonArray([data]);
}
