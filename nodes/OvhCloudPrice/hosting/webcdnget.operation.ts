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
                displayName: 'Cdn Name',
                name: 'cdnName',
                type: 'options',
                options: [{ name: 'Any', value: '' }],
                default: '',
                required: true,
                description: 'The cdnName',
                displayOptions,
            }
    ];
}

/**
 * Get the price for cdn option
 *
 * HTTP method: GET
 * Endpoint: /price/hosting/web/cdn/{cdnName}
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
    const client = new ApiClient(this);
    const cdnName = this.getNodeParameter('cdnName', 0) as string;
    const data = (await client.httpGet(`/price/hosting/web/cdn/${cdnName}`)) as IDataObject;
    return this.helpers.returnJsonArray([data]);
}
