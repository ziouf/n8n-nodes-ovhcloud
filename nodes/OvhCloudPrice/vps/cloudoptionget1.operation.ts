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
                displayName: 'Option Name',
                name: 'optionName',
                type: 'options',
                options: [{ name: 'Any', value: '' }],
                default: '',
                required: true,
                description: 'The optionName',
                displayOptions,
            }
    ];
}

/**
 * Get price of VPS Cloud Options 2014
 *
 * HTTP method: GET
 * Endpoint: /price/vps/2014v1/cloud/option/{optionName}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
    const client = new ApiClient(this);
    const optionName = this.getNodeParameter('optionName', _itemIndex ?? 0) as string;
    const data = (await client.httpGet(`/price/vps/2014v1/cloud/option/${optionName}`)) as IDataObject;
    return this.helpers.returnJsonArray([data]);
}
