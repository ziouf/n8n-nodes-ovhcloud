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
                displayName: 'Line Action',
                name: 'lineAction',
                type: 'options',
                options: [{ name: 'Any', value: '' }],
                default: '',
                required: true,
                description: 'The lineAction',
                displayOptions,
            }
    ];
}

/**
 * Get the price of line action
 *
 * HTTP method: GET
 * Endpoint: /price/xdsl/options/line/{lineAction}
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
    const client = new ApiClient(this);
    const lineAction = this.getNodeParameter('lineAction', 0) as string;
    const data = (await client.httpGet(`/price/xdsl/options/line/${lineAction}`)) as IDataObject;
    return this.helpers.returnJsonArray([data]);
}
