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
                displayName: 'Capacity',
                name: 'capacity',
                type: 'options',
                options: [{ name: 'Any', value: '' }],
                default: '',
                required: true,
                displayOptions,
            }
    ];
}

/**
 * Get price of backup storage offer
 *
 * HTTP method: GET
 * Endpoint: /price/dedicated/server/backupStorage/{capacity}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
    const client = getClient(this);
    const capacity = this.getNodeParameter('capacity', _itemIndex ?? 0) as string;
    const data = (await client.httpGet(`/price/dedicated/server/backupStorage/${capacity}`)) as IDataObject;
    return this.helpers.returnJsonArray([data]);
}
