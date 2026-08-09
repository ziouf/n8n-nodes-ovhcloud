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
                displayName: 'Host Profile',
                name: 'hostProfile',
                type: 'options',
                options: [{ name: 'Any', value: '' }],
                default: '',
                required: true,
                description: 'The hostProfile',
                displayOptions,
            }
    ];
}

/**
 * Get price of dedicated Cloud monthly host ressources
 *
 * HTTP method: GET
 * Endpoint: /price/dedicatedCloud/2018v4/waw1c/infrastructure/host/monthly/{hostProfile}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
    const client = new ApiClient(this);
    const hostProfile = this.getNodeParameter('hostProfile', _itemIndex ?? 0) as string;
    const data = (await client.httpGet(`/price/dedicatedCloud/2018v4/waw1c/infrastructure/host/monthly/${hostProfile}`)) as IDataObject;
    return this.helpers.returnJsonArray([data]);
}
