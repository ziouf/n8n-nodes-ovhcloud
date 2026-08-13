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
 * Get price of dedicated Cloud hourly host ressources
 *
 * HTTP method: GET
 * Endpoint: /price/dedicatedCloud/2018v2/waw1c/infrastructure/host/hourly/{hostProfile}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
    const client = getClient(this);
    const hostProfile = this.getNodeParameter('hostProfile', _itemIndex ?? 0) as string;
    const data = (await client.httpGet(`/price/dedicatedCloud/2018v2/waw1c/infrastructure/host/hourly/${hostProfile}`)) as IDataObject;
    return this.helpers.returnJsonArray([data]);
}
