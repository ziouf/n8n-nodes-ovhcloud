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
                displayName: 'Option',
                name: 'option',
                type: 'options',
                options: [{ name: 'Any', value: '' }],
                default: '',
                required: true,
                displayOptions,
            }
    ];
}

/**
 * Get the price of address move option fee
 *
 * HTTP method: GET
 * Endpoint: /price/xdsl/addressMove/fee/{option}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
    const client = getClient(this);
    const option = this.getNodeParameter('option', _itemIndex ?? 0) as string;
    const data = (await client.httpGet(`/price/xdsl/addressMove/fee/${option}`)) as IDataObject;
    return this.helpers.returnJsonArray([data]);
}
