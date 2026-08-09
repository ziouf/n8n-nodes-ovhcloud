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
                displayName: 'License Name',
                name: 'licenseName',
                type: 'options',
                options: [{ name: 'Any', value: '' }],
                default: '',
                required: true,
                description: 'The licenseName',
                displayOptions,
            }
    ];
}

/**
 * Get the monthly price for an Office 365 license
 *
 * HTTP method: GET
 * Endpoint: /price/saas/csp2/license/{licenseName}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
    const client = new ApiClient(this);
    const licenseName = this.getNodeParameter('licenseName', _itemIndex ?? 0) as string;
    const data = (await client.httpGet(`/price/saas/csp2/license/${licenseName}`)) as IDataObject;
    return this.helpers.returnJsonArray([data]);
}
