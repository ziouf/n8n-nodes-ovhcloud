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
                displayName: 'Office Name',
                name: 'officeName',
                type: 'options',
                options: [{ name: 'Any', value: '' }],
                default: '',
                required: true,
                description: 'The officeName',
                displayOptions,
            }
    ];
}

/**
 * Get the monthly price for an office license
 *
 * HTTP method: GET
 * Endpoint: /price/license/office/{officeName}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
    const client = new ApiClient(this);
    const officeName = this.getNodeParameter('officeName', _itemIndex ?? 0) as string;
    const data = (await client.httpGet(`/price/license/office/${officeName}`)) as IDataObject;
    return this.helpers.returnJsonArray([data]);
}
