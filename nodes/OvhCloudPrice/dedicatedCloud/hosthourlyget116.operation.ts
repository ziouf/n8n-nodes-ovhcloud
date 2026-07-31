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
 * Get price of dedicated Cloud hourly host ressources
 *
 * HTTP method: GET
 * Endpoint: /price/dedicatedCloud/2018v6/eri1c/infrastructure/host/hourly/{hostProfile}
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
    const client = new ApiClient(this);
    const hostProfile = this.getNodeParameter('hostProfile', 0) as string;
    const data = (await client.httpGet(`/price/dedicatedCloud/2018v6/eri1c/infrastructure/host/hourly/${hostProfile}`)) as IDataObject;
    return this.helpers.returnJsonArray([data]);
}
